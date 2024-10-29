// controllers/AI/flashcardsController.js

const Flashcard = require('../../models/flashcard');
const Course = require('../../models/course');
const Topic = require('../../models/topic');
const {Configuration, OpenAIApi} = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * @desc    Generate flashcards for a specific course
 * @route   POST /api/ai/flashcards/generate
 * @access  Private
 */
exports.generateFlashcards = async (req, res) => {
    const {course_id} = req.body;
    const userId = req.user.id;

    try {
        // Verify that the user is enrolled in the course
        const enrollment = await require('../../models').Enrollment.findOne({
            where: {user_id: userId, course_id},
        });

        if (!enrollment) {
            return res.status(403).json({message: 'Not enrolled in this course.'});
        }

        // Fetch course topics
        const topics = await Topic.findAll({
            where: {course_id},
        });

        if (topics.length === 0) {
            return res.status(404).json({message: 'No topics found for this course.'});
        }

        // Compile course content
        const courseContent = topics.map((topic) => topic.content).join('\n');

        // Generate flashcards using OpenAI
        const aiResponse = await openai.createCompletion({
            model: 'gpt-4o-mini',
            prompt: `Generate 10 flashcards based on the following content:\n\n${ courseContent }\n\nEach flashcard should have a question and an answer.`,
            max_tokens: 1000,
            temperature: 0.7,
        });

        const flashcardsText = aiResponse.data.choices[0].text.trim();

        // Parse AI response into structured flashcards
        const flashcards = flashcardsText.split('\n').map((line) => {
            const [question, answer] = line.split('Answer:').map((part) => part.trim());
            return {question, answer};
        }).filter(flashcard => flashcard.question && flashcard.answer);

        // Save flashcards to the database
        const savedFlashcards = await Flashcard.bulkCreate(
            flashcards.map((fc) => ({
                course_id,
                question: fc.question,
                answer: fc.answer,
            }))
        );

        res.status(201).json({flashcards: savedFlashcards});
    } catch (error) {
        console.error('Error generating flashcards:', error);
        res.status(500).json({message: 'Server error while generating flashcards.'});
    }
};

/**
 * @desc    Retrieve flashcards for a specific course
 * @route   GET /api/ai/flashcards/:course_id
 * @access  Private
 */
exports.getFlashcards = async (req, res) => {
    const {course_id} = req.params;
    const userId = req.user.id;

    try {
        // Verify that the user is enrolled in the course
        const enrollment = await require('../../models').Enrollment.findOne({
            where: {user_id: userId, course_id},
        });

        if (!enrollment) {
            return res.status(403).json({message: 'Not enrolled in this course.'});
        }

        // Fetch flashcards
        const flashcards = await Flashcard.findAll({
            where: {course_id},
        });

        res.status(200).json({flashcards});
    } catch (error) {
        console.error('Error retrieving flashcards:', error);
        res.status(500).json({message: 'Server error while retrieving flashcards.'});
    }
};
