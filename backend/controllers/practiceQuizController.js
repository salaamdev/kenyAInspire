// controllers/practiceQuizController.js

const OpenAI = require('openai');
const {Topic} = require('../models');

const configuration = new OpenAI.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

exports.generatePracticeQuizzes = async (req, res) => {
    const {courseId} = req.params;

    try {
        // Fetch the topics for the course
        const topics = await Topic.findAll({
            where: {course_id: courseId},
            attributes: ['title', 'content'],
        });

        if (!topics || topics.length === 0) {
            return res.status(404).json({message: 'No topics found for this course.'});
        }

        // Concatenate the content of all topics
        const courseContent = topics.map((topic) => topic.content).join('\n');

        // Prepare the messages for OpenAI Chat API
        const messages = [
            {
                role: 'system',
                content: `You are an assistant that creates multiple-choice practice quizzes for educational purposes. Based on the following course content, generate a set of quiz questions. Each question should have four options, and only one correct answer. Provide the quizzes in the following JSON format strictly, where each question is an object with the following properties, "question", "options", and "correctAnswer". For example:

[
  {
    "question": "Question text",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": 0 // Index of the correct answer in the options array
  },
  // ... more questions
]

Do not add anything else in the response apart from the above format.
Ensure that the content is suitable for students and does not include any disallowed content.

Course Content:
${ courseContent }
`,
            },
        ];

        // Call OpenAI Chat Completion API
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 800,
            temperature: 0.7,
        });

        const quizzesText = aiResponse.data.choices[0].message.content.trim();

        // Parse the quizzes from the AI response
        let quizzes;
        try {
            quizzes = JSON.parse(quizzesText);
        } catch (parseError) {
            console.error('Error parsing quizzes JSON:', parseError);
            return res.status(500).json({message: 'Failed to parse quiz data.'});
        }
        console.log(quizzes);
        res.json({questions: quizzes});
    } catch (error) {
        console.error('Error generating practice quizzes:', error);
        res.status(500).json({message: 'Server error'});
    }
};
