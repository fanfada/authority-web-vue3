import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API
    // baseURL: 'http://60.204.236.211:8080/api'
})

export default service