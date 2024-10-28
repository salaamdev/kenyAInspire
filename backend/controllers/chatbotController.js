// controllers/chatbotController.js

const OpenAI = require('openai');
const Course = require('../models/course');
const Enrollment = require('../models/enrollment');
const {Op} = require('sequelize');

const configuration = new OpenAI.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

exports.handleMessage = async (req, res) => {
    const userMessage = req.body.message;
    const userName = req.user.name;
    const userId = req.user.id;

    try {
        // Fetch courses and progress data
        const enrollments = await Enrollment.findAll({
            where: {user_id: userId},
            include: [{model: Course}]
        });
        const courses = enrollments.map((enrollment) => enrollment.Course);

        // Format courses and progress data for the prompt
        const coursesList = courses.map((course) => course.title).join(', ');

        const messages = [
            {
                role: 'system',
                content: `You are an educational assistant. The student's name is ${ userName }. They are enrolled in the following courses: ${ coursesList }. Use this information to assist them with their educational queries. No matter what, if the question is not educational in nature, clearly refuse to respond and explain that you can only assist with educational content. Ensure that all responses are formatted without using symbols like dashes or asterisks.`,
            },
            {role: 'user', content: userMessage},
        ];

        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 150,
        });

        const reply = aiResponse.data.choices[0].message.content.trim();

        res.json({reply});
    } catch (error) {
        console.error('Chatbot Error:', error);
        res.status(500).json({message: 'Error processing your message.'});
    }
};
