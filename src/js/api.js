import axios from "axios";

const api = axios.create({
    baseURL: 'https://paw-hut.b.goit.study',
});

export const getAnimals = params => api.get('/api/animals', {params});

export const getCategories = () => api.get('/api/categories');

export const createOrder = data => api.post('/api/orders', data);

export const getFeedbacks = () => api.get('/feedbacks');

export const getAnimalById = id => api.get(`/api/animals/${id}`);