import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3302/data"
})

export const userApi ={
    load:()=> api.get()
    //send:()=>api.post()
}
