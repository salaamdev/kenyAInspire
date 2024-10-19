// controllers/recommendationController.js

const {Configuration, OpenAIApi} = require('openai');
const Progress = require('../models/progress');
const Enrollment = require('../models/enrollment'); // Assuming you have an Enrollment model
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Get AI-generated recommendations
exports.getRecommendations = async (req, res) => {
    const userId = req.user.id;
    const userName = req.user.name;

    try {
        // Fetch user progress from the database
        const userProgress = await Progress.findAll({
            where: {user_id: userId},
        });

        // Fetch user enrollments from the database
        const userEnrollments = await Enrollment.findAll({
            where: {user_id: userId},
        });

        // Create a prompt for the AI
        const messages = [
            // {role: "system", content: `You are a helpful assistant. Your goal is to provide personalized learning recommendations for students. You have access to the student's progress in various subjects. The student's name is ${ userName }. Always greet the student first. Provide recommendations based on their progress. Then end with a motivational message that encourages them to work on the recommended content.`},
            {role: "user", content: `In 100 words or less, provide personalized learning recommendations for a student named ${ userName } based on their progress in various subjects.`}
        ];

        // Call OpenAI API with GPT-4o-mini
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 150, // Adjust based on token limits
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
