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
                role: "system",
                content: `Create 5 flashcards for the subject "${ subject }" in grade ${ grade }. Each flashcard should have a question and an answer. Format the response as a JSON array like the following example:
                [
                  {
                    "question": "What is photosynthesis?",
                    "answer": "Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water."
                  },
                  {
                    "question": "What is the capital of France?",
                    "answer": "Paris."
                  }
                ]
                make sure not other text is generated outside of the JSON array. Always use the same format for the flashcards. That is the only way to parse the response. Finally make sure the flashcards are related to the subject, for language based subjects, respond with the same language as the subject. 
                  `
            }
        ];

        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages,
            max_tokens: 500,
        });

        // Parse the AI response as JSON
        const flashcardsText = aiResponse.data.choices[0].message.content.trim();
        // console.log(flashcardsText);
        let flashcards;

        try {
            flashcards = JSON.parse(flashcardsText);
        } catch (error) {
            throw new Error('Invalid flashcard format');
        }

        if (!Array.isArray(flashcards)) {
            throw new Error('Invalid flashcard format');
        }

        // Optional: Validate each flashcard object
        for (const card of flashcards) {
            if (!card.question || !card.answer) {
                throw new Error('Invalid flashcard structure');
            }
        }

        // Send the flashcards back to the client
        res.status(200).json({
            success: true,
            flashcards: flashcards,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Failed to generate flashcards'});
    }
};