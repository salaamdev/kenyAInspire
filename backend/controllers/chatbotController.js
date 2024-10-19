// controllers/chatbotController.js

const OpenAI = require('openai');
const Course = require('../models/course');
const Progress = require('../models/progress');
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

        const progressData = await Progress.findAll({
            where: {user_id: userId}
        });

        // Format courses and progress data for the prompt
        const coursesList = courses.map((course) => course.title).join(', ');
        const progressSummary = progressData
            .map(
                (p) =>
                    `Course ${ p.course_id }: ${ p.completed_modules }/${ p.total_modules } modules completed`
            )
            .join('\n');

        const messages = [
            {
                role: 'system',
                content: `You are an educational assistant. The student's name is ${ userName }. They are enrolled in the following courses: ${ coursesList }. Their progress is:\n${ progressSummary }\nUse this information to assist them.`,
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
