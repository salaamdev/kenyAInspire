const {Configuration, OpenAIApi} = require('openai');
const pool = require('../config/db');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.getRecommendations = async (req, res) => {
    const userId = req.user.id;
    const userName = req.user.name;

    try {
        // Fetch user's progress data
        const progressResult = await pool.query(
            'SELECT course_id, completed_modules, total_modules FROM progress WHERE user_id = $1',
            [userId]
        );

        const progressData = progressResult.rows;

        // Prepare data for the AI prompt
        const progressSummary = progressData
            .map(
                (progress) =>
                    `Course ID ${ progress.course_id }: Completed ${ progress.completed_modules }/${ progress.total_modules } modules.`
            )
            .join('\n');

        // Custom prompt
        const prompt = `
Based on the following progress data for the student ${ userName }:

${ progressSummary }

Provide personalized learning recommendations to help ${ userName } improve their understanding and performance in their courses. Be specific and suggest actionable steps.

Recommendations:
    `;

        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: prompt}],
            max_tokens: 250,
            temperature: 0.7,
        });

        const recommendations = aiResponse.data.choices[0].message.content.trim();

        res.json({recommendations});
    } catch (error) {
        console.error('Error fetching AI recommendations:', error.response ? error.response.data : error.message);
        res.status(500).json({message: 'Server error'});
    }
};
