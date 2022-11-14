import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login_public_user, register_user_action } from '../../../actions/user_accounts_actions'
import { LOGIN_ROUTE, REGISTER_ROUTE, RESET_PASS_ROUTE } from '../../../routing/routing_constants'

import { InvisibleBtn } from "../../sharable_components/small_components/buttons/buttons"
import { Login } from "../../specific_components/login_component/login"
import { Register } from "../../specific_components/register_component/register"
import { ResetPassword } from '../../specific_components/reset_password/reset_password'

import './login_reg.css'

export const LoginRegister = ({user_is_logged_in, mode}) => {
    const dispatch = useDispatch()

    const [credentials, setCredentials] = useState(
        {
            email:null,
            password:null,
            user_type:"PUBLIC USER"
        }
    )

    // login submit action
    const login_user = (e, credentials) => {
        e.preventDefault()
        dispatch(login_public_user(credentials))
    }

    // register new user
    const [user_details, setUserdetails] = useState(
        {
            email:null,
            password:null,
            user_type:"PUBLIC USER",
            password2:null
        }
    )

    const register_new_user = (e, user_details) => {
        e.preventDefault()
        dispatch(register_user_action(user_details))
    }

    if(user_is_logged_in){
        return (
            <Navigate to={'/home'}/>
        )
    }

    return (
        <div className="full_window">

            <div className="center_all">
                {mode==='login' && 
                <div>
                    <Login submitaction={e=>login_user(e, credentials)} credentials={credentials} setCredentials={setCredentials}/>
                    <Link to={RESET_PASS_ROUTE}>
                        <InvisibleBtn switchValue={'Reset Forgotten Password'} />
                    </Link>
                    </div>}
                {mode==='register' && <Register 
                submit_action={e=>register_new_user(e, user_details)} 
                user_details={user_details} 
                setUserdetails={setUserdetails} 
                />}
                {mode==='reset_password' && <ResetPassword />}
                or <Link to={mode==='login'? REGISTER_ROUTE:LOGIN_ROUTE}>
                    <InvisibleBtn switchValue={mode==='login'? 'Register Here':'Login'}/>
                </Link>
                
            </div>
        </div>
    )
}