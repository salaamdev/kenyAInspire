const OpenAI = require('openai');
const StudentProgress = require('../models/studentTopicProgress');
const {Course, Topic} = require('../models');
const configuration = new OpenAI.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

exports.generateFlashcards = async (req, res) => {
    const userId = req.user.id;
    const {courseId} = req.params;

    try {
        // Fetch the course with associated topics
        const course = await Course.findByPk(courseId, {
            include: [{model: Topic}],
        });

        if (!course || !course.Topics || course.Topics.length === 0) {
            return res.status(404).json({error: 'No topics found for this course.'});
        }

        // Get completed topics for the user in the course
        const studentProgress = await StudentProgress.findAll({
            where: {
                user_id: userId,
                is_completed: true,
            },
            include: [{
                model: Topic,
                where: {course_id: courseId},
            }],
        });

        if (!studentProgress || studentProgress.completed_topics.length === 0) {
            return res.status(400).json({message: 'No completed topics found'});
        }

        // Get topics content
        const completedTopics = course.Topics.filter((topic) =>
            studentProgress.completed_topics.includes(topic._id)
        );

        const topicsContent = completedTopics.map((topic) => topic.content).join('\n');

        // Generate flashcards using AI
        const prompt = `You are an assistant that creates educational flashcards. Based on the following content, generate a set of flashcards. Each flashcard should have a question (Q) and an answer (A).
        Content: ${ topicsContent }
        Provide the flashcards in the format:
        Q: [Question]
        A: [Answer]`;

        const aiResponse = await openai.createCompletion({
            model: 'gpt-4o-mini',
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        });

        const flashcardsText = aiResponse.data.choices[0].text.trim();

        // Parse the flashcards (assuming they are in a specific format)
        const flashcards = parseFlashcards(flashcardsText);

        res.json({flashcards});
    } catch (error) {
        console.error('Error generating flashcards:', error);
        res.status(500).json({message: 'Server error'});
    }
};

function parseFlashcards (text) {
    const flashcards = [];
    const entries = text.split('\nQ:').map((entry, index) => (index === 0 ? entry : 'Q:' + entry));

    entries.forEach((entry) => {
        const [questionPart, answerPart] = entry.split('\nA:');
        if (questionPart && answerPart) {
            const question = questionPart.replace('Q:', '').trim();
            const answer = answerPart.trim();
            flashcards.push({question, answer});
        }
    });

    return flashcards;
}
