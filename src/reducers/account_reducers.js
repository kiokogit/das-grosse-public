
export const logged_in_user_status = (state=null, {type, payload}) => {
    switch (type) {
        case "LOGIN_STATUS":
            return payload
        case "LOGOUT_STATUS":
            return state
        default:
            return state
    }
}