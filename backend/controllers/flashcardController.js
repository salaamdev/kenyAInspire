// controllers/flashcardController.js

const OpenAI = require('openai');
const {Topic} = require('../models');
const configuration = new OpenAI.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

exports.generateFlashcards = async (req, res) => {
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
                content: `You are an assistant that creates educational flashcards. Based on the following course content, generate a set of flashcards. Mathematics will should have calculations related questions and answers. Each flashcard should have a question (Q) and an answer (A). Provide the flashcards in the format:

Q: [Question]
A: [Answer]

Course Content:
${ courseContent }


`,
            },
        ];

        // Call OpenAI Chat Completion API
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 1500,
            temperature: 0.7,
        });

        const flashcardsText = aiResponse.data.choices[0].message.content.trim();

        // Parse the flashcards from the AI response
        const flashcards = parseFlashcards(flashcardsText);

        res.json({flashcards});
    } catch (error) {
        console.error('Error generating flashcards:', error);
        res.status(500).json({message: 'Server error'});
    }
};

function parseFlashcards (text) {
    const flashcards = [];
    const entries = text.split('\nQ:').map((entry, index) => (index === 0 ? entry : 'Q:' + entry));

    entries.forEach((entry) => {
        const [questionPart, answerPart] = entry.split('\nA:');
        if (questionPart && answerPart) {
            const question = questionPart.replace('Q:', '').trim();
            const answer = answerPart.trim();
            flashcards.push({question, answer});
        }
    });

    return flashcards;
}
