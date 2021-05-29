import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3302/data"
})

export const userApi ={
    load:()=> api.get()
    //send:()=>api.post()
<<<<<<< HEAD
}
=======
}
>>>>>>> c5be818a99bcffe7763fb86a19a0f7b0290ceb0f
