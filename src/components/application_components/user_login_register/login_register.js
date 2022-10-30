import { Login } from "../../specific_components/login_component/login"
import { Register } from "../../specific_components/register_component/register"

export const LoginRegister = ({mode='login'}) => {

    return (
        <div>
            Login Button/Register Button
            {mode==='login' && <Login />}
            {mode==='register' && <Register />}
        </div>
    )
}