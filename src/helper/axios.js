import axios from "axios";
const api = "https://studentapp-54pm.onrender.com/"
const axiosInstance =axios.create({
    baseURL : api,
})


export default axiosInstance;