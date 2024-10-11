const {Configuration, OpenAIApi} = require('openai');
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
        // Create a prompt for the AI
        const messages = [
            {role: "system", content: "You are a helpful assistant."},
            {role: "user", content: `Provide personalized learning recommendations for a student named ${ userName } based on their progress in various subjects.`}
        ];

        // Call OpenAI API with GPT-4o-mini
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 150, // Adjust based on token limits
        });

        const recommendations = aiResponse.data.choices[0].message.content.trim();

        res.json({recommendations});
    } catch (error) {
        console.error('Error fetching AI recommendations:', error);
        res.status(500).json({message: 'Server error'});
    }
};
