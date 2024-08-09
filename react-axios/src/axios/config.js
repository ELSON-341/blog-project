import axios from 'axios'

const postFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'content-type' : 'application/json'
    }
})

export default postFetch