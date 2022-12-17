import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {Routes, Route, useLocation} from 'react-router-dom'
import { clear_short_error_action } from "../actions/error_actions"
import { get_logged_in_user_profile } from "../actions/user_accounts_actions"

import { AboutUs } from "../components/application_components/public_landing_page/about."
import { Booking } from "../components/application_components/public_landing_page/booking"
import { ContactUs } from "../components/application_components/public_landing_page/contact_us"
import { Home } from "../components/application_components/public_landing_page/home_window"
import { JourneyPlanner } from "../components/application_components/public_landing_page/journey_planner"
import { Packages } from "../components/application_components/public_landing_page/packages"
import { LoginRegister } from "../components/application_components/user_login_register/login_register"
import { ErrorSuccessBar } from "../components/sharable_components/small_components/alerts/fail_success_bars"
import { BreadCrumbs } from "../components/sharable_components/small_components/breadcrumbs/breadcrumbs"
import { Footer } from "../components/specific_components/footer/Footer"
import { PublicHeader } from "../components/specific_components/public_header/public_header"
import { SideBar } from "../components/specific_components/public_header/side_nav_bar"

import './main.css'
import { HOME_ROUTE } from "./routing_constants"

export const Router = () =>{
    const dispatch = useDispatch()
    const location = useLocation()
    const user_is_logged_in = useSelector(state =>state.logged_in_user_status)
    // get if user is logged in or not
    const logged_in_user_details = useSelector(state=> state.logged_in_user_details)

    const short_alert = useSelector(state => state.short_alert)
    if(short_alert){
        setTimeout(() => {
            dispatch(clear_short_error_action())
        }, 6000);
    }
 
    // get user details if logged in
    useEffect(()=>{

        if (user_is_logged_in){
            dispatch(get_logged_in_user_profile())
        }
    }, [dispatch, user_is_logged_in])


    return (
        <div className={location.pathname.startsWith(HOME_ROUTE)? "home_window_background":"other_windows_background"}>
            <div className="main_component display_row_grids">
                <div className="flex_grid main_content_container">
                    <SideBar user_is_logged_in={user_is_logged_in} />
                    <div>
                    <PublicHeader user_is_logged_in={user_is_logged_in} user={logged_in_user_details} />
                    {/* alert messages */}
                    {short_alert && <ErrorSuccessBar message={short_alert.message} alert_type={short_alert.alert_type}/>}
                                        
                    {/* breadcrumbs */}
                    <div className="pad_left pad_top">

                    {user_is_logged_in && <BreadCrumbs />}
                    {/* routes */}
                    <div>
                        <Routes>
                            <Route path="login" element={<LoginRegister user_is_logged_in={user_is_logged_in} mode={'login'}/>}/>
                            <Route path="register" element={<LoginRegister user_is_logged_in={user_is_logged_in} mode={'register'} />} />
                            <Route path="reset_password" element={<LoginRegister user_is_logged_in={user_is_logged_in} mode={'reset_password'} />} />

                            <Route path='home' element={<Home />} />
                            <Route path='' element={<Home />} />
                            <Route path='packages/*' element={<Packages/>} />
                            <Route path='about' element={<AboutUs />} />
                            <Route path='booking/*' element={<Booking user_is_logged_in={user_is_logged_in} user={logged_in_user_details} />} />
                            <Route path={`journey_planner/*`} element={<JourneyPlanner user_is_logged_in={user_is_logged_in} />} />
                            <Route path='contact_us' element={<ContactUs />} />

                            {/* not found route */}
                            <Route path='*' element={<div>Sorry, Page moved</div>} />
                        </Routes>
                    </div>
                    </div>
                    </div>
                    <div className="footer_sticky">
                        <Footer />  

                    </div>
                </div>
            </div>
        </div>
    )
}
