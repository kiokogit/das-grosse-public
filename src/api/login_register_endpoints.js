
import {API} from "./api_settings";

export const register_new_user = (user_details) => API.post('auth/account/create_user', user_details)

export const login_user = (user_credentials) => API.post('auth/account/login_user', user_credentials)

export const reset_user_forgotten_password = (user_email) => API.post('/user/reset_password', user_email)

export const get_logged_in_user_profile = () => API.get('/user/public_accounts/get_user_own_profile')