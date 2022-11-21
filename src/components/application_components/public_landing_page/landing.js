import { MainBody } from "../../specific_components/main_body/main_body"
import { AboutUs } from "./about."
import { Booking } from "./booking"
import { ContactUs } from "./contact_us"
import { Home } from "./home_window"
import { JourneyPlanner } from "./journey_planner"
import { Packages } from "./packages"


export const Landing = ({mode}) =>{
    // set the current window

    return (
        <MainBody>
            {mode==='Home' && <Home />}
            {mode==='About Us' && <AboutUs />}
            {mode==='Booking' && <Booking />}
            {mode==='Journey Planner' && <JourneyPlanner />}
            {mode==='Packages' && <Packages />}
            {mode==='Contact Us' && <ContactUs />}
        </MainBody>
    )
}