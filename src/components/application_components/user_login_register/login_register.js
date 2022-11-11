import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login_public_user, register_user_action } from '../../../actions/user_accounts_actions'

import { InvisibleBtn } from "../../sharable_components/small_components/buttons/buttons"
import { Login } from "../../specific_components/login_component/login"
import { Register } from "../../specific_components/register_component/register"
import { ResetPassword } from '../../specific_components/reset_password/reset_password'

import './login_reg.css'

export const LoginRegister = () => {
    const [mode, setMode] = useState('login')
    const dispatch = useDispatch()
    const setSwitchValue = (e) => {
        if (mode==='login') {
            setMode('register')
        }
        else {
            setMode('login')
        }
    }

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
        console.log(credentials)
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



    return (
        <div className="full_window">

            <div className="center_all">
                {mode==='login' && 
                <div>
                    <Login submitaction={e=>login_user(e, credentials)} credentials={credentials} setCredentials={setCredentials}/>
                    <InvisibleBtn switchValue={'Reset Forgotten Password'} onClick={e=>setMode('resetPass')} />
                    </div>}
                {mode==='register' && <Register 
                submit_action={e=>register_new_user(e, user_details)} 
                user_details={user_details} 
                setUserdetails={setUserdetails} 
                />}
                {mode==='resetPass' && <ResetPassword />}
                or <InvisibleBtn switchValue={mode==='login'? 'Register Here':'Login'} onClick={e=>setSwitchValue(e)}/>
                <div>
                    <Link to='/'>
                        <InvisibleBtn switchValue={'Home'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}