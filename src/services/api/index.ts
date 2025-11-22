import axios, { InternalAxiosRequestConfig } from "axios";
import { DecodedToken, IConsultationRequest } from "@/types";
import { jwtDecode } from "jwt-decode";
import { getToken, Token } from "../cookies";

// Axios instance
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Make sure this is correctly set in .env
});

// Request interceptor
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Accept-Language'] = 'en';
    return config;
});

// JWT Decode utility
export const decodeToken = (token: Token): DecodedToken => jwtDecode(token);

// API call to Consultation endpoint
export const freeConsultation = async (data: IConsultationRequest) => {
    const response = await api.post('/Consultation', data);
    return response.data;
};
