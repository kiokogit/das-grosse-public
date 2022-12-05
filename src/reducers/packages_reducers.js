export const package_detail_view = (state={}, action) => {
    switch(action.type){
        case 'PACKAGE_DETAIL_VIEW':
            return action.payload
        // case "PACKAGE_LOCATION_PIN":
        //     return action.payload
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

export const list_view = (state=[], action) => {
    switch(action.type){
        case 'APPLICATIONS_LIST':
            return [{
                id:"shuidnije",
                title:"My journey",
                index:1,
                date_submitted:"On friday",
                location:"Kenya",
                application_status:"AT Registrar",
                reference_number:"REFDDRS/2022"
            },
            {
                id:"shuidniooi00",
                title:"Massai mara tour",
                index:1,
                date_submitted:"on thursday",
                location:"Marsabit",
                application_status:"AT Booking office",
                reference_number:"REFDDRftft/9888"
            }
        ]

        default:
            return []
    }
}

export const application_detail_view = (state={}, action) => {
    switch(action.type) {
        case 'APPLICATION_DETAILS':
            return action.payload

        default:
            return state
    }
}

export const wishlist = (state=[], action) => {
    switch(action.type) {
        case 'WISHLIST':
            return action.payload

        default:
            return []
    }
}