
import axios from "axios";
import { API_VERSION, HOST_SERVER } from "../settings/constants";

const APICall = axios.create({baseURL: HOST_SERVER + API_VERSION})

APICall.interceptors.request.use(req => {
    if (localStorage.getItem('token')){
        req.headers = {
            ...req.headers,
            JWTAUTH:localStorage.getItem('token')
        } 
    }
    
    return req
})

APICall.interceptors.response.use(res => {
    // store tokens
    return res
})

export const API = APICall
