import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (userData) => {
    const response = await axios.post(`${ API_URL }/auth/login`, userData);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await axios.post(`${ API_URL }/auth/register`, userData);
    return response.data;
};
export const getCourses = async (token) => {
    const response = await axios.get(`${ API_URL }/courses`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};

export const getProgress = async (token) => {
    const response = await axios.get(`${ API_URL }/progress`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};

export const getAnnouncements = async () => {
    const response = await axios.get(`${ API_URL }/announcements`);
    return response.data;
};

export const getEvents = async () => {
    const response = await axios.get(`${ API_URL }/events`);
    return response.data;
};

export const getRecommendations = async (token) => {
    const response = await axios.get(`${ API_URL }/recommendations`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};
