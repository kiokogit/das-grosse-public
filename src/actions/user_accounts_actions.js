
import * as account_api from "../api/login_register_endpoints";
import { server_500_error } from "./actions_constants";
import { parse_alert_messages } from "./parse_alert_messages";


export const register_user_action = (user_details) => async(dispatch) => {
    try {
        const response = await account_api.register_new_user(user_details)
        dispatch({type:'REGISTRATION_STATUS', payload:response.data.details})
        dispatch({type:'SHORT_SUCCESS_ALERT', payload:response.data.details})
        await dispatch(login_public_user(user_details))
        parse_alert_messages(response)
    } catch (error) {
        if(error.response?.status === 400) {
            dispatch({type:'SHORT_ERROR_ALERT', payload:error.response.data.details}) 
        } else{
            dispatch({type:'SHORT_ERROR_ALERT', payload: server_500_error})
        }  
    }
}

export const login_public_user = (credentials) => async(dispatch) => {
    try {
        
        const response = await account_api.login_user(credentials)
        dispatch({type:'LOGIN_STATUS', payload:response.data.details})
        localStorage.setItem('token', response.headers.get('jwtauth'))
        dispatch({type:'SHORT_SUCCESS_ALERT', payload:response.data.details})

    } catch (error) {
        if(error.response?.status === 400) {
            dispatch({type:'SHORT_ERROR_ALERT', payload:error.response.data.details}) 
        } else{
            dispatch({type:'SHORT_ERROR_ALERT', payload: server_500_error})
        } 
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
        if(error.response?.status === 400) {
            dispatch({type:'SHORT_ERROR_ALERT', payload:error.response.data.details}) 
        } else{
            dispatch({type:'SHORT_ERROR_ALERT', payload: server_500_error})
        } 
    }
}