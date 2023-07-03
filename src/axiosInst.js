import axios from "axios";

// const baseURL = './data.json'
const baseURL = 'https://wizo-cell.onrender.com/api/'

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;