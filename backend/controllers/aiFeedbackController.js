// controllers/aiFeedbackController.js

const OpenAI = require('openai');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const {Readable} = require('stream');

const configuration = new OpenAI.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

exports.getAIFeedback = async (req, res) => {
    const {message, courseId} = req.body;
    let fileContent = '';

    try {
        // Handle file if provided
        if (req.file) {
            const file = req.file;
            // Read file content based on file type
            if (file.mimetype === 'text/plain') {
                fileContent = fs.readFileSync(file.path, 'utf-8');
            } else if (
                file.mimetype === 'application/pdf' ||
                file.mimetype === 'application/msword' ||
                file.mimetype ===
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ) {
                // For PDF files
                const dataBuffer = fs.readFileSync(file.path);
                const pdfData = await pdfParse(dataBuffer);
                fileContent = pdfData.text;
            } else {
                return res.status(400).json({message: 'Unsupported file type.'});
            }

            // Clean up uploaded file
            fs.unlinkSync(file.path);
        }

        // Prepare the content for AI analysis
        const contentToAnalyze = message ? message : fileContent;

        if (!contentToAnalyze) {
            return res.status(400).json({message: 'No content to analyze.'});
        }

        // Prepare the messages for OpenAI Chat API
        const messages = [
            {
                role: 'system',
                content: `You are an educational assistant that provides constructive feedback on students' assignments. Analyze the following content and provide feedback on areas of improvement, clarity, and correctness. Be encouraging and helpful in your response. Politely refuse to provide answers, solutions, rewriting the content or direct guidance. Refuse politely to anything that is not education related`,
            },
            {
                role: 'user',
                content: contentToAnalyze,
            },
        ];

        // Call OpenAI Chat Completion API
        const aiResponse = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: messages,
            max_tokens: 2000,
            temperature: 0.7,
        });

        const feedback = aiResponse.data.choices[0].message.content.trim();

        res.json({feedback});
    } catch (error) {
        console.error('Error generating AI feedback:', error);
        res.status(500).json({message: 'Server error'});
    }
};
