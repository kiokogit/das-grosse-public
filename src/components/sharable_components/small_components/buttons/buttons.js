import './buttons.css'

// submit data
export const SubmitBtn = ({onsubmitfn}) => {

    return(
        <button className="btn submit_btn" onClick={e=>onsubmitfn(e)} >
            Submit
            </button>
    )
}
// cancel operation
export const CancelBtn = ({oncancelfn}) => {
    return(
        <button className="btn cancel_btn" onClick={e=>oncancelfn(e)} >
            Cancel
            </button>
    )
}
// close window
export const CloseBtn = ({onclose}) => {
    return(
        <button className="btn close_btn" onClick={e=>onclose(e)}>
            x
        </button>
    )
}
// invisible button / link button
export const InvisibleBtn = ({switchValue, onClick}) => {
    return (
        <button className="btn invisible_btn" onClick={onClick}>
            {switchValue}
        </button>
    )
}