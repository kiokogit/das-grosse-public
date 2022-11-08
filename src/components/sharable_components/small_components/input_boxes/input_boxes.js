import './inputs.css'

export const Input = ({placeholder, value, setValue, type, name, label}) => {
    return (
        <div className='display_inline'>
            {label && <div>{label}</div>}
            <input name={name} type={type? type:'button'} value={value} contentEditable={false} className="input margin_around" placeholder={placeholder} onChange={e=>setValue(e.target.value)} />
        </div>
    )
}

export const InputVariant = ({placeholder, value, setValue, type, name, label, className}) => {
    return (
        <div className='display_inline'>
            {label && <div>{label}</div>}
            <input name={name} type={type? type:'button'} value={value} className={`small_input margin_around ${className}`} placeholder={placeholder} onChange={e=>setValue(e.target.value)} />
        </div>
    )
}

export const RadioInput = ({placeholder, value, checked, setValue, type, name, label}) => {
    return (
        <div className='display_inline'>
            {label && <div>{label}</div>}
            <input name={name} type={type? type:'button'} value={value} className="input_radio margin_around" placeholder={placeholder} onChange={setValue} checked={checked} />
        </div>
    )
}

export const TextArea = ({placeholder, setValue, label}) => {
    return (
        <div className='text_area_container'>
            {label && <div>{label}</div>}
            <textarea className='text_area' placeholder={placeholder} onChange={e=>setValue(e.target.value)}/>
        </div>
    )
}
