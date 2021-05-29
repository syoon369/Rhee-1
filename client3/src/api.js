import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001/data"
})

export const userApi = {
    load: () => api.get()
    //send:()=>api.post()
}