import { useNavigate } from "react-router-dom"
import { CONTACT_ROUTE, HOME_ROUTE, PACKAGES_ROUTE } from "../../../routing/routing_constants"
import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

import './error.css'

export const Error404 = () => {
    const navigate = useNavigate()

    return(
        <div className="center_error">
            <div className="error_title">
                Oh Snap! 😥
            </div>
            <div>
                The page you are looking for is not available. 
                <p>It is (probably) one of the great features we are working on that will be out soon.</p>
                 Try some other cool locations?
            </div>
            <div>
                <InvisibleBtn2 value={"Go back home"} className={"submit_btn"} onClick={e=>navigate(HOME_ROUTE)}/>
                <InvisibleBtn2 value={"Show Packages"} className={"submit_btn"} onClick={e=>navigate(PACKAGES_ROUTE+'/all')}/>
                <InvisibleBtn2 value={"Contact Customer care"} className={"submit_btn"} onClick={e=>navigate(CONTACT_ROUTE)}/>
            </div>
        </div>
    )
}