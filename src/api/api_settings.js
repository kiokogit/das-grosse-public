
import axios from "axios";
import { API_VERSION, HOST_SERVER } from "../settings/constants";

axios.interceptors.request.use(req => {
    console.log('Request intercepted')
    if (localStorage.getItem('token')){
        req.headers['JWTAUTH'] = localStorage.getItem('token')
    }
    
    return req
})

axios.interceptors.response.use(res => {
    console.log('response intercepted')
    // store tokens
    if (res.headers['JWTAUTH']){
        localStorage.setItem('token', res.headers['JWTAUTH'])
    }
    return res
})

export const API = axios.create({baseURL: HOST_SERVER + API_VERSION})
