import { COMPANY_NAME } from "../../../../settings/constants"
import { CancelBtn, SubmitBtn } from "../../small_components/buttons/buttons"

import './forms.css'

export const SubmitCancelForm = ({fields, header, submitfn, cancelfn}) =>{

    return (
        <div>
            <form className="form">
                <div id='company_name'>
                    {COMPANY_NAME}
                </div>
                <div className="header_field">
                    {header}
                </div>
                <div className="fields_field">
                    {fields}
                </div>
                <div className="buttons_field">
                    <SubmitBtn onsubmitfn={submitfn} className="submit_btn2" />
                    <CancelBtn oncancelfn={cancelfn} />
                </div>
            </form>
        </div>
    )
}