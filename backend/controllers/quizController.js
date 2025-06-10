// controllers/quizController.js

const OpenAI = require('openai');
const {User, Question, UserQuestion} = require('../models');
require('dotenv').config();

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Generate Quiz Questions
exports.generateQuiz = async (req, res) => {
    const userId = req.user.id;
    const {grade, subject} = req.body;

    if (!grade || !subject) {
        return res.status(400).json({error: 'Grade and subject are required.'});
    }

    try {
        // Fetch user's previously incorrect questions
        const failedQuestions = await UserQuestion.findAll({
            where: {userId, isCorrect: false},
            include: [{model: Question}],
            limit: 5,
            order: [['answeredAt', 'DESC']],
        });

        let messages = [
            {
                role: 'system',
                content: `You are an AI tutor generating multiple-choice questions for ${ subject } at grade ${ grade } in kenya. Content should be relevant to the new Kenyan competency based curriculum (cbc). Each question should have 4 options labeled A, B, C, D, and indicate the correct answer. Do not format, dont rewrite A, B, C, D. respond with the question and choices sepereted by a new line.
                here is an example:
                1. What is the opposite of "dark"?
                Bright
                Small
                Fast
                Cold
                Correct answer: A) Bright
                `,
            },
        ];

        if (failedQuestions.length > 0) {
            // Include previous incorrect questions
            const previousTopics = failedQuestions
                .map((entry) => entry.Question.questionText)
                .join('\n');

            messages.push({
                role: 'user',
                content: `Based on these topics the student struggled with:\n${ previousTopics }\nGenerate 3 similar multiple-choice questions.`,
            });
        }

        // Add message to generate new questions
        messages.push({
            role: 'user',
            content: `Generate 7 new multiple-choice questions for ${ subject } at grade ${ grade }.`,
        });        // OpenAI API call
        const aiResponse = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 1500,
        });

        const questionsText = aiResponse.choices[0].message.content.trim();
        console.log(questionsText);
        // Parse the AI response into questions
        const questionsArray = parseQuestions(questionsText);

        // Save new questions to the database
        const savedQuestions = await Promise.all(
            questionsArray.map(async (q) => {
                const question = await Question.create({
                    grade,
                    subject,
                    questionText: q.question,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                });
                return question;
            })
        );

        res.json({questions: savedQuestions});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to generate quiz.'});
    }
};

// Helper function to parse questions
function parseQuestions (text) {
    // Implement parsing logic based on the AI's response format
    // Example:
    // Split by question numbers and extract question, options, and answer
    const questions = [];
    const questionBlocks = text.split(/\n\n+/);
    for (const block of questionBlocks) {
        const lines = block.trim().split('\n');
        if (lines.length < 6) continue;

        const questionText = lines[0].replace(/^\d+\.\s*/, '');
        const options = lines.slice(1, 5).map((line) => line.replace(/^[A-D]\.\s*/, ''));
        const answerLine = lines[5];
        const correctAnswer = answerLine.match(/Answer:\s*([A-D])/i)?.[1];

        if (questionText && options.length === 4 && correctAnswer) {
            questions.push({
                question: questionText,
                options,
                correctAnswer,
            });
        }
    }
    return questions;
}

// Record User's Answer
exports.recordAnswer = async (req, res) => {
    const userId = req.user.id;
    const {questionId, isCorrect} = req.body;

    if (typeof isCorrect !== 'boolean' || !questionId) {
        return res.status(400).json({error: 'Invalid data.'});
    }

    try {
        await UserQuestion.create({
            userId,
            questionId,
            isCorrect,
        });

        res.json({message: 'Answer recorded successfully.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to record answer.'});
    }
};

// Get User's Incorrectly Answered Questions
exports.getFailedQuestions = async (req, res) => {
    const userId = req.user.id;

    try {
        const failedQuestions = await UserQuestion.findAll({
            where: {userId, isCorrect: false},
            include: [{model: Question}],
        });

        const questions = failedQuestions.map((entry) => entry.Question);

        res.json({failedQuestions: questions});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch failed questions.'});
    }
};

// Delete a Failed Question
exports.deleteFailedQuestion = async (req, res) => {
    const userId = req.user.id;
    const {questionId} = req.params;

    try {
        const result = await UserQuestion.destroy({
            where: {userId, questionId, isCorrect: false},
        });

        if (result) {
            res.json({message: 'Failed question deleted successfully.'});
        } else {
            res.status(404).json({error: 'Failed question not found.'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to delete failed question.'});
    }
};
