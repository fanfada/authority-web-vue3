import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API
    // baseURL: 'http://60.204.236.211:8080/api'
})

service.interceptors.response.use(res => {
    // const state = res.data.state
    // if (state !== "OK") {
    //     const msg = res.data.errorMessage
    //     console.log(msg)
    //     return Promise.reject(new Error(msg))
    // }
    return res.data;
})
export default service