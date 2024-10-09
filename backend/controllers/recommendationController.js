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
        const prompt = `Provide personalized learning recommendations for a student named ${ userName } based on their progress in various subjects.`;

        // Call OpenAI API
        const aiResponse = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150,
        });

        const recommendations = aiResponse.data.choices[0].text.trim();

        res.json({recommendations});
    } catch (error) {
        console.error('Error fetching AI recommendations:', error);
        res.status(500).json({message: 'Server error'});
    }
};
