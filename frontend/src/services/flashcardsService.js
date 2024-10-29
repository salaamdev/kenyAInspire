// services/aiServices/flashcardsService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ai/flashcards';

const generateFlashcards = async (courseId, token) => {
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
};

const getFlashcards = async (courseId, token) => {
    const response = await axios.get(`${ API_URL }/${ courseId }`, {
        headers: {
            Authorization: `Bearer ${ token }`,
        },
    });
    return response.data;
};

export default {
    generateFlashcards,
    getFlashcards,
};
