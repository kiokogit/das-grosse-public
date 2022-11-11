
export const logged_in_user_status = (state=null, {type, payload}) => {
    switch (type) {
        case "LOGIN_STATUS":
            return payload
    
        default:
            return state
    }
}