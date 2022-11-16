
export const get_package_detail_view = (id) => dispatch => {

    dispatch({type: 'PACKAGE_DETAIL_VIEW', payload:{}})
}


export const get_package_for_booking = (id) => dispatch => {
    console.log('package saved for booking')

    dispatch({type: 'PACKAGE_FOR_BOOKING', payload:{}})
}

export const clear_package_for_booking = () => dispatch => {
    console.log('package cleared from booking')

    dispatch({type: 'CLEAR_PACKAGE_FOR_BOOKING', payload:{}})
}