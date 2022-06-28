import axios from "axios"

const axiosJsonPH = axios.get({
    baseURL:"https://jsonplaceholder.typicode.com/users"
})

const getUsers = () => axiosJsonPH.get('')
const getPosts = () => axiosJsonPH.get('/$id/posts')
export {getUsers,getPosts}