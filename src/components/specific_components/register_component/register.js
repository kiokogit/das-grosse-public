import { SubmitCancelForm } from "../../sharable_components/large_components/form_filler/submit_cancel_form"
import { Input } from "../../sharable_components/small_components/input_boxes/input_boxes"

import './register.css'


export const Register = () => {


    return (
        <div className="center_all">
            <SubmitCancelForm 
                header={'Register User'}
                submitfn={onsubmit}
                cancelfn={oncancel}
                fields= {(
                    <div>
                        <div>
                            <Input placeholder={'Enter Email Address'} />
                        </div>
                        <div>
                            <Input placeholder={'Choose a good Password'} />
                        </div>
                        <div>
                            <Input placeholder={'Confirm Password'} />
                        </div>
                    </div>
                )}
            />
        </div>
    )
}