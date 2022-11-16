
import * as account_api from "../api/login_register_endpoints";
import { parse_alert_messages } from "./parse_alert_messages";


export const register_user_action = (user_details) => async(dispatch) => {
    try {
        const response = await account_api.register_new_user(user_details)
        dispatch({type:'REGISTRATION_STATUS', payload:'success'})
        dispatch({type:'LOGIN_STATUS', payload:true})
        parse_alert_messages(response)
    } catch (error) {
        console.log(error.response.data.details)        

    }
}

export const login_public_user = (credentials) => async(dispatch) => {
    try {
        
        const response = await account_api.login_user(credentials)
        dispatch({type:'LOGIN_STATUS', payload:true})
        localStorage.setItem('token', response.headers.get('jwtauth'))
        parse_alert_messages(response)

    } catch (error) {
        console.log(error.response)        
    }
}

export const logout_public_user = () => async(dispatch) => {
    try{
        dispatch({type:'LOGIN_STATUS', payload:false})
        dispatch({type:'LOGGED_USER_DETAILS', payload: {}})
        localStorage.removeItem('token')

    } catch(error){

    }
}

export const get_logged_in_user_profile = ( ) => async(dispatch) =>{
    try{

        const {data} = await account_api.get_logged_in_user_profile()
        dispatch({type: 'LOGGED_USER_DETAILS', payload: data['details']})
    } catch(error){
        console.log(error)
    }
}