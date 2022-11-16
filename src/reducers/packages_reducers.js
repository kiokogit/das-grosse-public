export const package_detail_view = (state={}, action) => {
    switch(action.type){
        case 'PACKAGE_DETAIL_VIEW':
            return {
                cover_image:"https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg",
                title:"My First tour Pack",
                description:"Here is the description in brief",
                contains:"For two, travelling all over",
                details:"Small fire around the camp",
                location:"Here is Nairobi",
                price:"300USD"
            
            }

        default:
            return state
    }
}

export const package_for_booking = (state={}, action) => {
    switch(action.type){
        case 'PACKAGE_FOR_BOOKING':
            return {
                cover_image:"https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg",
                title:"My First tour Pack",
                description:"Here is the description in brief of my first tour package for booking",
                contains:"For two, travelling all over",
                details:"Small fire around the camp",
                location:"Mombasa, Kenya",
                price:"300USD",
                package_type:'predefined'
            
            }
        case 'CLEAR_PACKAGE_FOR_BOOKING':
            return action.payload

        default:
            return state
    }
}