import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:4000'
})

const postUser =  payload  => api.post("/createpost",payload);
const getUsers =  ()  => api.get("/getAllposts");


export{
    postUser,
    getUsers
}