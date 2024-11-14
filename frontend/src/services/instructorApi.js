// frontend/src/services/instructorApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getAuthToken = () => localStorage.getItem('token');

export const getRecentActivity = async () => {
    const token = getAuthToken();
    const response = await axios.get(`${ API_URL }/instructor/recent-activity`, {
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

// frontend/src/services/instructorApi.js
export const getUpcomingAssignments = async () => {
    const token = getAuthToken();
    try {
        const response = await axios.get(`${ API_URL }/instructor/upcoming-assignments`, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });
        return response.data; // Return the whole response data
    } catch (error) {
        console.error('Error fetching upcoming assignments:', error);
        throw error;
    }
};

export const getClassPerformance = async () => {
    const token = getAuthToken();
    const response = await axios.get(`${ API_URL }/instructor/class-performance`, {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    });
    return response.data;
};

export const createAssignment = async (assignmentData) => {
    const token = getAuthToken();
    const response = await axios.post(`${ API_URL }/instructor/assignments`, assignmentData, {
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

export const getAssignments = async () => {
    const token = getAuthToken();
    try {
        const response = await axios.get(`${ API_URL }/instructor/assignments`, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching assignments:', error);
        throw error;
    }
};

export const getSubmissions = async (assignmentId) => {
    const token = getAuthToken();
    const response = await axios.get(`${ API_URL }/instructor/assignments/${ assignmentId }/submissions`, {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    });
    return response.data;
};

export const getSubmission = async (submissionId) => {
    const token = getAuthToken();
    const response = await axios.get(`${ API_URL }/instructor/submissions/${ submissionId }`, {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    });
    return response.data;
};

export const submitGrade = async (submissionId, gradeData) => {
    const token = getAuthToken();
    const response = await axios.post(`${ API_URL }/instructor/submissions/${ submissionId }/grade`, gradeData, {
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};
