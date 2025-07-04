// controllers/chatbotController.js

const OpenAI = require('openai');
const {User} = require('../models');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

exports.handleMessage = async (req, res) => {
    const userMessage = req.body.message;
    const userName = req.user.name;
    const userId = req.user.id;

    try {
        // Since courses are managed on the frontend, remove course-related data fetching
        // You can tailor the system message accordingly

        const messages = [
            {
                role: 'system',
                content: `You are an educational assistant. The student's name is ${ userName }. Use this information to assist them with their educational queries. No matter what, if the question is not educational in nature, clearly refuse to respond and explain that you can only assist with educational content. Ensure that all responses are formatted without using symbols like dashes or asterisks.`,
            },
            {role: 'user', content: userMessage},
        ];        const aiResponse = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 500,
        });

        const reply = aiResponse.choices[0].message.content.trim();

        res.json({reply});
    } catch (error) {
        console.error('Chatbot Error:', error);
        res.status(500).json({message: 'Error processing your message.'});
    }
};
