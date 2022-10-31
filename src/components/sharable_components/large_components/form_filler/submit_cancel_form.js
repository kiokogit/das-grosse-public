import { CancelBtn, SubmitBtn } from "../../small_components/buttons/buttons"

import './forms.css'

export const SubmitCancelForm = ({fields, header, submitfn, cancelfn}) =>{

    return (
        <div>
            <form className="form" onSubmit={e=>submitfn(e)}>
                <div className="header_field">
                    {header}
                </div>
                <div className="fields_field">
                    {fields}
                </div>
                <div className="buttons_field">
                    <SubmitBtn onsubmitfn={submitfn} />
                    <CancelBtn oncancelfn={cancelfn} />
                </div>
            </form>
        </div>
    )
}