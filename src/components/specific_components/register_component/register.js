import { SubmitCancelForm } from "../../sharable_components/large_components/form_filler/submit_cancel_form"
import { Input } from "../../sharable_components/small_components/input_boxes/input_boxes"

import './register.css'


export const Register = ({submit_action, user_details, setUserdetails, oncancel}) => {


    return (
        <div className="center_all">
            <SubmitCancelForm 
                header={'Register User'}
                submitfn={submit_action}
                cancelfn={oncancel}
                fields= {(
                    <div>
                        <div>
                            <Input 
                            placeholder={'First Name'} 
                            type='text' 
                            onChange={e=>setUserdetails({...user_details, first_name:e.target.value})} />
                        </div>
                        <div>
                            <Input 
                            placeholder={'Last Name'} 
                            type='text' 
                            onChange={e=>setUserdetails({...user_details, last_name:e.target.value})} />
                        </div>
                        <div>
                            <Input 
                            placeholder={'Enter Email Address'} 
                            type='email' 
                            onChange={e=>setUserdetails({...user_details, email:e.target.value})} />
                        </div>
                        <div>
                            <Input 
                            placeholder={'Choose a good Password'} 
                            type='password' 
                            onChange={e=>setUserdetails({...user_details, password:e.target.value})}/>
                        </div>
                        <div>
                            <Input 
                            placeholder={'Confirm Password'} 
                            type='password' 
                            onChange={e=>setUserdetails({...user_details, password2:e.target.value})}/>
                        </div>
                    </div>
                )}
            />
        </div>
    )
}