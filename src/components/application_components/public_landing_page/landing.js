import { useEffect, useState } from "react"
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
    const [windows, setWindow] = useState('Home')
    useEffect(()=>{
        // let objState = {id:300}
        window.history.replaceState("", windows, `${windows.replace(" ","")}`)
    }, [windows])

    return (
        <div className="main_component display_row_grids">
            <div className="main_content_container">
                <PublicHeader setWindow={setWindow}/>
                <MainBody>
                    {windows==='Home' && <Home />}
                    {windows==='About Us' && <AboutUs />}
                    {windows==='Booking' && <Booking />}
                    {windows==='Journey Planner' && <JourneyPlanner />}
                    {windows==='Packages' && <Packages />}
                    {windows==='Contact Us' && <ContactUs />}
                </MainBody>
            </div>
            <div className="footer_sticky">
                <Footer />  

            </div>
        </div>
    )
}