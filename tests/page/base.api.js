import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const BaseAPI = axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        "content-type" : "application/json",
        "accept": "*/*",
        "Cookie": "token=abc123"
    },
    validateStatus: function() {
        return true
    }
})

export default BaseAPI