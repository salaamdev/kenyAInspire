// backend/controllers/quizController.js

const {Configuration, OpenAIApi} = require('openai');
const User = require('../models/User');
require('dotenv').config();

// Initialize OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Generate Quiz Questions
exports.generateQuiz = async (req, res) => {
    const userId = req.user.id;
    const {grade, subject} = req.body;

    if (!grade || !subject) {
        return res.status(400).json({error: 'Grade and subject are required.'});
    }

    try {
        const user = await User.findByPk(userId);
        const failedQuestions = JSON.parse(user.failedQuestions || '[]');

        let prompt = '';

        if (failedQuestions.length > 0) {
            const previousQuestions = failedQuestions
                .slice(-5)
                .map(q => q.question)
                .join('\n');
            prompt = `Based on the following questions, generate 5 similar multiple-choice questions for the subject "${ subject }" in grade ${ grade }:\n${ previousQuestions }\nAdditionally, create 5 new multiple-choice questions for the same subject and grade. Provide options labeled A, B, C, D, and indicate the correct answer.`;
        } else {
            prompt = `Create 10 multiple-choice questions for the subject "${ subject }" in grade ${ grade }. Provide options labeled A, B, C, D, and indicate the correct answer.`;
        }

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt,
            max_tokens: 1500,
            temperature: 0.7,
        });

        const questionsText = response.data.choices[0].text.trim();
        const questionsArray = questionsText.split('\n\n').map(q => {
            const lines = q.split('\n');
            const questionLine = lines[0];
            const options = lines.slice(1, 5).map(opt => opt.trim());
            const answerLine = lines[5];

            return {
                question: questionLine.replace(/^\d+\.\s*/, '').trim(),
                options: options.map(opt => opt.replace(/^[A-D]\.\s*/, '').trim()),
                correctAnswer: answerLine.replace(/Answer:\s*/, '').trim(),
            };
        });

        res.json({questions: questionsArray});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to generate quiz.'});
    }
};

// Store Failed Questions
exports.storeFailedQuestions = async (req, res) => {
    const userId = req.user.id;
    const {failedQuestions} = req.body;

    if (!failedQuestions || !Array.isArray(failedQuestions)) {
        return res.status(400).json({error: 'Invalid failed questions data.'});
    }

    try {
        const user = await User.findByPk(userId);
        user.failedQuestions = JSON.stringify([
            ...JSON.parse(user.failedQuestions || '[]'),
            ...failedQuestions,
        ]);

        await user.save();

        res.json({message: 'Failed questions recorded successfully.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to store failed questions.'});
    }
};