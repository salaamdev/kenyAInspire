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
            {role: "system", content: `You are a helpful assistant. Your goal is to provide personalized learning recommendations for students. You have access to the student's progress in various subjects. The student's name is ${ userName }. Always greet the student first. Provide recommendations based on their progress. then end with a motivational message that encourages them to work on the recommended content`},
            {role: "user", content: `in 100 words or less, Provide personalized learning recommendations for a student named ${ userName } based on their progress in various subjects.`}
        ];

        // Call OpenAI API with GPT-4o-mini
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 150, // Adjust based on token limits
            // temperature: 0.5,
            // top_p: 1,
            // top_k: 40,
        });

        const recommendations = aiResponse.data.choices[0].message.content.trim();

        res.json({recommendations});
    } catch (error) {
        console.error('Error fetching AI recommendations:', error);
        res.status(500).json({message: 'Server error'});
    }
};