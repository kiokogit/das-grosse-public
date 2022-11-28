
export const loading_state = (state=false, {type, payload}) => {
    switch (type) {
        case "SET_LOADING":
            return payload

        default:
            return false
    }
}