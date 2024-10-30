// controllers/flashcardController.js

const {Configuration, OpenAIApi} = require('openai');
require('dotenv').config();

// Initialize OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Generate Flashcards
exports.generateFlashcards = async (req, res) => {
    const {grade, subject} = req.body;

    if (!grade || !subject) {
        return res.status(400).json({error: 'Grade and subject are required.'});
    }

    try {
        // Create a prompt for the AI to generate flashcards
        const messages = [
            {
                role: "user",
                content: `Create 5 flashcards for the subject "${ subject }" in ${ grade }. Each flashcard should have a question and an answer. Format each flashcard as "Question: <question text> Answer: <answer text>". Separate each flashcard with two newlines.`,
            },
        ];

        // Call OpenAI API with GPT-4
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 500,
        });

        // Check if the response is valid
        if (!aiResponse.data || !aiResponse.data.choices || !aiResponse.data.choices[0] || !aiResponse.data.choices[0].message) {
            throw new Error('Invalid response from OpenAI API');
        }

        // Parse the AI response to extract flashcards
        const flashcardsText = aiResponse.data.choices[0].message.content.trim();
        const flashcards = flashcardsText.split('\n\n').map(card => {
            const [question, answer] = card.split('Answer:');
            if (!question || !answer) {
                throw new Error('Invalid flashcard format');
            }
            return {
                question: question.replace('Question:', '').trim(),
                answer: answer.trim(),
            };
        });

        // Send the flashcards back to the client
        res.status(200).json({
            success: true,
            flashcards: flashcards,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to generate flashcards',
        });
    }
};