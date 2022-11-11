
import API from "./api_settings";

API.interceptors.request('', req=>{
    console.log('request intercepted again')
    return req
})

// to get account details, user profiles, edit, etc; for self account

// get user profile details
export const get_logged_in_user_profile = () => API.get('/user/logged_user_profile')

export const get_any_user_profile = (user_id) => API.get(`/user/user_profile?id=${user_id}`)

