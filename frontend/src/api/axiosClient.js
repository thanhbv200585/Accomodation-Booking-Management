import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
    return config;
});



export default axiosClient;
