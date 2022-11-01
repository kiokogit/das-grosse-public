import { useState } from "react"
import { Footer } from "../../specific_components/footer/Footer"
import { MainBody } from "../../specific_components/main_body/main_body"
import { PublicHeader } from "../../specific_components/public_header/public_header"
import { AboutUs } from "./about."
import { Booking } from "./booking"
import { ContactUs } from "./contact_us"
import { Home } from "./home_window"
import { JourneyPlanner } from "./journey_planner"
import { Packages } from "./packages"


import './landing.css'

export const Landing = () =>{
    // set the current window
    const [window, setWindow] = useState('home')

    return (
        <div className="main_component">
            <PublicHeader setWindow={setWindow}/>
            <MainBody>
                {window==='Home' && <Home />}
                {window==='About Us' && <AboutUs />}
                {window==='Booking' && <Booking />}
                {window==='Journey Planner' && <JourneyPlanner />}
                {window==='Packages' && <Packages />}
                {window==='Contact Us' && <ContactUs />}
            </MainBody>
            <Footer />
        </div>
    )
}