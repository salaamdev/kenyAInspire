// frontend/src/services/aiServices/flashcardsService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ai/flashcards';

const generateFlashcards = async (courseId, token) => {
    try {
        const response = await axios.post(
            `${ API_URL }/generate`,
            {course_id: courseId},
            {
                headers: {
                    Authorization: `Bearer ${ token }`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error generating flashcards:', error);
        throw error;
    }
};

const getFlashcards = async (courseId, token) => {
    try {
        const response = await axios.get(`${ API_URL }/${ courseId }`, {
            headers: {
                Authorization: `Bearer ${ token }`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error retrieving flashcards:', error);
        throw error;
    }
};

export default {
    generateFlashcards,
    getFlashcards,
};
