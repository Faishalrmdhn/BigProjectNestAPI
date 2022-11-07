import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const BaseAPI = axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        "content-type" : "application/json",
        "accept": "*/*",
        "Content-Type" : "application/json",
        "Accept": "application/json",
        "Cookie": `token=${process.env.TOKEN_URL}`
    },
    validateStatus: function() {
        return true
    }
})

export default BaseAPI