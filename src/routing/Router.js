import { useSelector } from "react-redux"

import {Routes, Route} from 'react-router-dom'

import { AboutUs } from "../components/application_components/public_landing_page/about."
import { Booking } from "../components/application_components/public_landing_page/booking"
import { ContactUs } from "../components/application_components/public_landing_page/contact_us"
import { Home } from "../components/application_components/public_landing_page/home_window"
import { JourneyPlanner } from "../components/application_components/public_landing_page/journey_planner"
import { Packages } from "../components/application_components/public_landing_page/packages"
import { LoginRegister } from "../components/application_components/user_login_register/login_register"
import { BreadCrumbs } from "../components/sharable_components/small_components/breadcrumbs/breadcrumbs"
import { Footer } from "../components/specific_components/footer/Footer"
import { PublicHeader } from "../components/specific_components/public_header/public_header"

import './main.css'

export const Router = () =>{

    // get if user is logged in or not
    const user_is_logged_in = useSelector(state =>state.logged_in_user_status)
    const package_detail_view = useSelector(state=>state.package_detail_view)
    const package_for_booking = useSelector(state=> state.package_for_booking)



    return (
        <div>
            <div className="main_component display_row_grids">
            <div className="main_content_container">
            <PublicHeader user_is_logged_in={user_is_logged_in} />
            {/* breadcrumbs */}

            <BreadCrumbs />
            {/* routes */}
                <Routes>
                    <Route path="login" element={<LoginRegister user_is_logged_in={user_is_logged_in} mode={'login'}/>}/>
                    <Route path="register" element={<LoginRegister user_is_logged_in={user_is_logged_in} mode={'register'} />} />
                    <Route path="reset_password" element={<LoginRegister user_is_logged_in={user_is_logged_in} mode={'reset_password'} />} />

                    <Route path='home' element={<Home />} />
                    <Route path='packages' element={<Packages/>} />
                    <Route path='about' element={<AboutUs />} />
                    <Route path='booking' element={<Booking selected_package={package_for_booking}/>} />
                    <Route path='journey_planner' element={<JourneyPlanner />} />
                    <Route path='contact_us' element={<ContactUs />} />

                    {/* not found route */}
                    <Route path='*' element={<div>Sorry, Page moved</div>} />
                </Routes>
            <div className="footer_sticky">
                <Footer />  

            </div>
            </div>
        </div>
        </div>
    )
}
