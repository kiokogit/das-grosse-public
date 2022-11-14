import { MainContainer } from "../../specific_components/booking_components/main_component"

export const Booking = ({selected_package={}}) => {
   
    return (
        <div>
            <MainContainer selected_package={selected_package} />
        </div>
    )
}