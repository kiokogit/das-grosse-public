import { MainContainer } from "../../specific_components/booking_components/main_component"

export const Booking = ({pack={}}) => {
    return (
        <div>
            <MainContainer is_predefined={pack? true:false} selected_package={pack} />
        </div>
    )
}