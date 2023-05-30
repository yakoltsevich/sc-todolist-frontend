import axios from "axios";
import {TOKEN_KEY} from "../shared/constant";

const API_URL = 'http://localhost:5000'

export const axiosClient = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    return config
})

axiosClient.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const {data: {accessToken}} = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem(TOKEN_KEY, accessToken);
            return axiosClient.request(originalRequest);
        } catch (e) {
            console.log('Not Authorized')
        }
    }
    throw error;
})