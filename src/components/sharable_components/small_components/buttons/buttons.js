import './buttons.css'

// submit data
export const SubmitBtn = ({onsubmitfn, className}) => {

    return(
        <button className={`btn submit_btn ${className}`} onClick={onsubmitfn} >
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
        <div className="close_btn" onClick={e=>onclose(e)}>
            x
        </div>
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
export const InvisibleBtn3 = ({switchValue, onClick}) => {
    return (
        <button className="btn invisible_btn3" onClick={onClick}>
            {switchValue}
        </button>
    )
}

// invisible 2 - for single page navigation
export const InvisibleBtn2 = ({value, onClick, className}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} value={value}>
            {value}
        </button>
    )
}

export const RadioBtn = ({value, onClick, className}) => {
    return (
        <button type='radio' className={`btn ${className}`} onClick={onClick} value={value}>
            {value}
        </button>
    )
}