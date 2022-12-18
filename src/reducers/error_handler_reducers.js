export const short_alert = (state=false, {type, payload}) => {
    switch (type) {
        case "SHORT_ERROR_ALERT":
            return {
                alert_type: 'error',
                message:payload
            }

        case "SHORT_SUCCESS_ALERT":
            return {
                alert_type:'success',
                message:payload
            }

        case "CLEAR_SHORT_ERROR_ALERT":
            return payload
        default:
            return state
    }
}