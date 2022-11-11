
import * as account_api from "../api/login_register_endpoints";
import { parse_alert_messages } from "./parse_alert_messages";


export const register_user_action = (user_details) => async(dispatch) => {
    try {
        const response = await account_api.register_new_user(user_details)
        dispatch({type:'REGISTRATION_STATUS', payload:'success'})
        console.log(response.data.details)
        parse_alert_messages(response)
    } catch (error) {
        console.log(error.response.data.details)        

    }
}

export const login_public_user = (credentials) => async(dispatch) => {
    try {
        
        const response = await account_api.login_user(credentials)
        console.log(response.data.details)
        dispatch({type:'LOGIN_STATUS', payload:'success'})
        parse_alert_messages(response)

    } catch (error) {
        console.log(error.response.data.details)        
    }
}