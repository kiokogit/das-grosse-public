import './inputs.css'

export const Input = ({placeholder, value, setValue, type, name, label}) => {
    return (
        <div className='display_inline'>
            {label && <div>{label}</div>}
            <input name={name} type={type? type:'button'} value={value} className="input margin_around" placeholder={placeholder} onChange={e=>setValue(e.target.value)} />
        </div>
    )
}

export const InputVariant = ({placeholder, value, setValue, type, name, label}) => {
    return (
        <div className='display_inline'>
            {label && <div>{label}</div>}
            <input name={name} type={type? type:'button'} value={value} className="small_input margin_around" placeholder={placeholder} onChange={e=>setValue(e.target.value)} />
        </div>
    )
}

export const RadioInput = ({placeholder, value, setValue, type, name, label}) => {
    return (
        <div className='display_inline'>
            {label && <div>{label}</div>}
            <input name={name} type={type? type:'button'} value={value} className="input_radio margin_around" placeholder={placeholder} onChange={e=>setValue(e.target.value)} />
        </div>
    )
}
