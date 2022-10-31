import {useState} from 'react'

import { InvisibleBtn } from "../../sharable_components/small_components/buttons/buttons"
import { Login } from "../../specific_components/login_component/login"
import { Register } from "../../specific_components/register_component/register"
import { ResetPassword } from '../../specific_components/reset_password/reset_password'

import './login_reg.css'

export const LoginRegister = () => {
    const [mode, setMode] = useState('login')
    const setSwitchValue = (e) => {
        if (mode==='login') {
            setMode('register')
        }
        else {
            setMode('login')
        }
    }



    return (
        <div className="full_window">

            <div className="center_all">
                {mode==='login' && 
                <div>
                    <Login />
                    <InvisibleBtn switchValue={'Reset Forgotten Password'} onClick={e=>setMode('resetPass')} />
                    </div>}
                {mode==='register' && <Register />}
                {mode==='resetPass' && <ResetPassword />}
                or <InvisibleBtn switchValue={mode==='login'? 'Register Here':'Login'} onClick={e=>setSwitchValue(e)}/>
            </div>
        </div>
    )
}