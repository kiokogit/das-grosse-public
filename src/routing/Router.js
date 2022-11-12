import React from "react"
import { useSelector } from "react-redux"

import {Routes, Route, BrowserRouter as Routing, Navigate} from 'react-router-dom'
import { Landing } from "../components/application_components/public_landing_page/landing"
import { LoginRegister } from "../components/application_components/user_login_register/login_register"


export const Router = () =>{

    // get if user is logged in or not
    const user_is_logged_in = useSelector(state => {
        if (state.logged_in_user_status){
         return true
        } else{
         return false
        }
         
     })


    return (
        <Routing>
            <Routes>
                <Route path="/" element={<Landing user_is_logged_in={user_is_logged_in} />}/>
                <Route path="/user_account" element={ user_is_logged_in? <Navigate to='/' replace={true} />:<LoginRegister/>} />
            </Routes>
        </Routing>
    )
}