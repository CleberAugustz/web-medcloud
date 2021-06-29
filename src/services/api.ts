import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    },
});

export default api;
