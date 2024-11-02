// backend/controllers/recommendationController.js

const {Configuration, OpenAIApi} = require('openai');
const {UserQuestion, Question} = require('../models');
require('dotenv').config();

// Initialize OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Get AI-generated recommendations
exports.getRecommendations = async (req, res) => {
    const userName = req.user.name;
    const userId = req.user.id;

    try {
        // Fetch failed questions
        const failedQuestions = await UserQuestion.findAll({
            where: {userId, isCorrect: false},
            include: [{model: Question}],
        });

        // Format failed questions
        const formattedQuestions = failedQuestions.map(q => ({
            question: q.Question.questionText,
            subject: q.Question.subject,
            grade: q.Question.grade,
        }));

        // Create a prompt including failed questions
        const messages = [
            {
                role: "user",
                content: `respond like this: Hello ${ userName }, based on your recent performance, here are some personalized learning recommendations. You struggled with the following topics:\n` +
                    `${ formattedQuestions.map(q => `- Grade ${ q.grade } ${ q.subject }: "${ q.question }"`).join('\n') }\n` +
                    `Please focus on these areas to improve your understanding.
                    The questions are to be converted to topics. then search online and give 3 links for further reading.
                    `,
            },
        ];

        // Call OpenAI API with GPT-4
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 300,
        });

        // Send the AI response back to the client
        res.status(200).json({
            success: true,
            recommendations: aiResponse.data.choices[0].message.content,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to get recommendations',
        });
    }
};