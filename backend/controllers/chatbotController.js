exports.handleMessage = async (req, res) => {
    const userMessage = req.body.message;
    const userName = req.user.name;
    const {courses, progress} = req.body; // Receive student data from frontend

    try {
        // Format courses and progress data for the prompt
        const coursesList = courses.map((course) => course.title).join(', ');
        const progressSummary = progress
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
