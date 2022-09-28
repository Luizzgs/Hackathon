import axios from "axios";

const api = axios.create({
    baseURL: "https://uenp.fun/turismo/api",
    headers: 
        {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    body:
        {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }

);

export default api;