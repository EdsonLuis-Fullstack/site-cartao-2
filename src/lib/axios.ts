import axios from 'axios';

const isServer = typeof window === 'undefined';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://api.cartaobeneficiar.com.br/api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
})