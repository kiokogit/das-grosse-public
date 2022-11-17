export const package_detail_view = (state={}, action) => {
    switch(action.type){
        case 'PACKAGE_DETAIL_VIEW':
            return action.payload

        default:
            return state
    }
}

export const package_for_booking = (state={}, action) => {
    switch(action.type){
        case 'PACKAGE_FOR_BOOKING':
            return action.payload

        case 'CLEAR_PACKAGE_FOR_BOOKING':
            return action.payload

        default:
            return state
    }
}