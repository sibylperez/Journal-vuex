import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCTJd_Bxdo3MnmZrrykDJ-_tLwBhPy1NJo'
    }
})

export default authApi