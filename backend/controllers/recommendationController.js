// controllers/recommendationController.js

const {Configuration, OpenAIApi} = require('openai');
require('dotenv').config();

// Initialize OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Get AI-generated recommendations
exports.getRecommendations = async (req, res) => {
    const userName = req.user.name;

    try {
        // Create a prompt for the AI without course data
        const messages = [
            {
                role: "user",
                content: `In 100 words or less, provide personalized learning recommendations for the student named ${ userName }. Start with a greeting that addresses the student by name. Format the output as a list of recommendations, without using any symbols like dashes, bullets, or asterisks. End with a motivational message encouraging the student to keep up their great work.`,
            },
        ];

        // Call OpenAI API with GPT-4
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 150,
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
