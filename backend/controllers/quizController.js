const OpenAI = require('openai');
const StudentProgress = require('../models/studentProgressModel');
const Course = require('../models/courseModel');

const configuration = new OpenAI.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

exports.generateQuiz = async (req, res) => {
    const userId = req.user._id;
    const courseId = req.params.courseId;

    try {
        // Get completed topics for the user in the course
        const studentProgress = await StudentProgress.findOne({
            user_id: userId,
            course_id: courseId,
        });

        if (!studentProgress || studentProgress.completed_topics.length === 0) {
            return res.status(400).json({message: 'No completed topics found'});
        }

        // Get topics content
        const course = await Course.findById(courseId);
        const completedTopics = course.topics.filter((topic) =>
            studentProgress.completed_topics.includes(topic._id)
        );

        const topicsContent = completedTopics.map((topic) => topic.content).join('\n');

        // Generate quiz using AI
        const prompt = `You are an assistant that creates educational quizzes. Based on the following content, generate a quiz with multiple-choice questions. Each question should have four options labeled a), b), c), and d), and indicate the correct answer.
        Content: ${ topicsContent }
        Provide the quiz in the format:
        1. [Question]
        a) Option 1
        b) Option 2
        c) Option 3
        d) Option 4
        Answer: [Correct Option]
        Repeat for each question.`;

        const aiResponse = await openai.createCompletion({
            model: 'gpt-4o-mini',
            prompt: prompt,
            max_tokens: 300,
            temperature: 0.7,
        });

        const quizText = aiResponse.data.choices[0].text.trim();

        // Parse the quiz (assuming it's in a specific format)
        const quiz = parseQuiz(quizText);

        res.json({quiz});
    } catch (error) {
        console.error('Error generating quiz:', error);
        res.status(500).json({message: 'Server error'});
    }
};
function parseQuiz (text) {
    const quiz = [];
    const questions = text.split('\n\n').filter((q) => q.trim() !== '');

    questions.forEach((qText) => {
        const lines = qText.split('\n');
        const questionLine = lines[0];
        const options = lines.slice(1, 5); // Assuming 4 options
        const answerLine = lines.find((line) => line.startsWith('Answer:'));

        const question = questionLine.replace(/^\d+\.\s*/, '').trim();
        const correctAnswer = answerLine ? answerLine.replace('Answer:', '').trim() : '';

        quiz.push({
            question,
            options,
            correctAnswer,
        });
    });
    return quiz;
}
