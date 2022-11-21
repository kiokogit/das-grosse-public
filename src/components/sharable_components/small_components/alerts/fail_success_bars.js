
import './alert.css'

export const ErrorSuccessBar = ({message, alert_type}) => {

    return (
        <div className={`alert_bar ${alert_type}`}>
            <div className="alert_message">
                {message}
            </div>
        </div>
    )
}