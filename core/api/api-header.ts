import axios from 'axios';

export const api = axios.create({
    // baseURL: process.env.API_URL,
    baseURL:"http://localhost:8080"
});