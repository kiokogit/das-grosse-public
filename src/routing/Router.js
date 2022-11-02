import React from "react"

import {Routes, Route, BrowserRouter as Routing} from 'react-router-dom'
import { Landing } from "../components/application_components/public_landing_page/landing"
import { LoginRegister } from "../components/application_components/user_login_register/login_register"

export const Router = () =>{
    return (
        <Routing>
            <Routes>
                <Route path="public_landing/" element={<Landing />}/>
                <Route path="/user_account" element={<LoginRegister/>} />
            </Routes>
        </Routing>
    )
}