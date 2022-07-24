import { BASE_URL } from "./constants";
import axios from "axios";

const request = axios.create({
    baseURL: process.env.APP_URL,
    headers: {
        'Accept': 'application/json'
    },
})
request.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)
export default request
