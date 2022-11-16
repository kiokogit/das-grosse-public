
export const logged_in_user_status = (state=false, {type, payload}) => {
    switch (type) {
        case "LOGIN_STATUS":
            return payload
        case "LOGOUT_STATUS":
            return state
        default:
            return state
    }
}

export const logged_in_user_details = (state={}, action) => {
    switch(action.type){
        case "LOGGED_USER_DETAILS":
            return action.payload

        default:
            return state
    }
}