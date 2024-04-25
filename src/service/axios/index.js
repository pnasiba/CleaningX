import axios from 'axios'

export const req = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 0,
})