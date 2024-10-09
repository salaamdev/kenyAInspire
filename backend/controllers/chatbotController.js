const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handleMessage = async (req, res) => {
    const userMessage = req.body.message;
    const userName = req.user.name;

    try {
        // Custom prompt engineering
        const prompt = `
You are a helpful and friendly educational assistant named EduBot, designed to assist students like ${ userName } with their studies. Provide clear and concise answers to their questions.

Student: ${ userMessage }
Assistant:
    `;

        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo', // Use the cost-effective model
            messages: [{role: 'user', content: prompt}],
            max_tokens: 150,
            temperature: 0.7,
        });

        const reply = aiResponse.data.choices[0].message.content.trim();

        res.json({reply});
    } catch (error) {
        console.error('Chatbot Error:', error);
        res.status(500).json({message: 'Error processing your message.'});
    }
};
