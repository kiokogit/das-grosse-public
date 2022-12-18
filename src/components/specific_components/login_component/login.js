import { SubmitCancelForm } from "../../sharable_components/large_components/form_filler/submit_cancel_form"
import { Input } from "../../sharable_components/small_components/input_boxes/input_boxes"

import './login.css'

export const Login = ({submitaction, credentials, setCredentials, oncancel}) => {
    
    return (
        <div className="center_all">
            <SubmitCancelForm 
                header={'User Login'}
                submitfn={submitaction}
                cancelfn={oncancel}
                fields= {(
                    <div>
                        <div>
                            <Input 
                            placeholder={'Enter Email Address'} 
                            type='email' 
                            onChange={e=> setCredentials({...credentials, email:e.target.value})} 
                            />
                        </div>
                        <div>
                            <Input 
                            placeholder={'Password'} 
                            type='password' 
                            onChange={e=> setCredentials({...credentials, password:e.target.value})}
                            />
                        </div>
                    </div>
                )}
            />
        </div>
    )
}