// backend/controllers/lessonPlanController.js
const OpenAI = require('openai');
require('dotenv').config();

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.generateLessonPlan = async (req, res) => {
  const {subject, grade, unit, topic} = req.body;

  if (!subject || !grade || !unit || !topic) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  try {
    const messages = [
      {
        role: "system",
        content: `You are an expert teacher and curriculum designer. Create a detailed lesson plan using markdown formatting. Include:

        # ${subject} - Grade ${grade}
        ## Unit: ${unit}
        ## Topic: ${topic}

        ### Learning Objectives
        - List objectives as bullet points
        
        ### Introduction/Overview
        Add a brief introduction paragraph
        
        ### Main Activities
        List each activity with duration:
        - **Activity 1** (XX mins): Description
        - **Activity 2** (XX mins): Description
        
        ### Learning Resources
        - List resources with links where applicable
        
        ### Assessment Methods
        Describe assessment methods
        
        ### Differentiation Strategies
        List differentiation strategies as bullet points`
      },
      {
        role: "user",
        content: `Create a detailed lesson plan for ${subject} Grade ${grade}, Unit ${unit}: ${topic}`
      }
    ];    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 2000
    });

    const lessonPlan = completion.choices[0].message.content;

    res.json({
      success: true,
      lessonPlan: {
        content: lessonPlan
      }
    });

  } catch (error) {
    console.error('Lesson plan generation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate lesson plan'
    });
  }
};