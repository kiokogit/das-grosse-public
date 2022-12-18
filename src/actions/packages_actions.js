import { packagess } from "../components/application_components/public_landing_page/packages_list_data"


export const get_package_detail_view = (id) => dispatch => {

    dispatch({type: 'PACKAGE_DETAIL_VIEW', payload:packagess.filter(p=>p.id===id)[0]})
}

export const get_package_location_pin = (id) => dispatch => {

    dispatch({type: 'PACKAGE_LOCATION_PIN', payload:packagess.filter(p=>p.id===id)[0].pin})
}

export const get_package_for_booking = (id) => dispatch => {

    dispatch({type: 'PACKAGE_FOR_BOOKING', payload:packagess.filter(p=>p.id===id)[0]})
}

export const clear_package_for_booking = () => dispatch => {

    dispatch({type: 'CLEAR_PACKAGE_FOR_BOOKING', payload:{}})
}

export const get_booking_applications_list = (filter) => dispatch => {

    dispatch({type: 'APPLICATIONS_LIST', payload:[]})
}

export const get_booking_application_detail = (id) => dispatch => {

    dispatch({type: "APPLICAITON_DETAILS", payload:{}})
}

export const get_user_wishlist = () => dispatch => {

    dispatch({type: 'WISHLIST', payload:packagess})
}