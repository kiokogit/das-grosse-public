import { Link, useLocation } from "react-router-dom"
import { ABOUT_ROUTE, BOOKING_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PACKAGES_ROUTE, PLANNER_ROUTE } from "../../../routing/routing_constants"
import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

import image from './dga_logo.png'

export const SideBar = () => {

    const {pathname} = useLocation()

    return (
        <div className='sidebar'>
            <div className='flex_column'>
                <div className='logo_section'>
                    <img alt="" src={image}/>
                </div>
                    <Link to={HOME_ROUTE} className={`nav_link ${pathname.startsWith(HOME_ROUTE) && 'current_nav'}`}>
                        <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='Home'/>
                    </Link>
                    <Link to={PACKAGES_ROUTE} className={`nav_link ${pathname.startsWith(PACKAGES_ROUTE) && 'current_nav'}`}>
                        <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='Packages' />
                    </Link>
                    <Link to={BOOKING_ROUTE} className={`nav_link ${pathname.startsWith(BOOKING_ROUTE) && 'current_nav'}`}>
                        <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='Booking' />
                    </Link>
                    
                    <Link to={PLANNER_ROUTE} className={`nav_link ${pathname.startsWith(PLANNER_ROUTE) && 'current_nav'}`}>
                        <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='Journey Planner' />
                    </Link>
                    <Link to={CONTACT_ROUTE} className={`nav_link ${pathname.startsWith(CONTACT_ROUTE) && 'current_nav'}`} >
                        <InvisibleBtn2 value={'Contact Us'} className={'menu_btn side_bar_btn'}/>
                    </Link>
                    <Link to={ABOUT_ROUTE} className={`nav_link ${pathname.startsWith(ABOUT_ROUTE) && 'current_nav'}`}>
                        <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='About Us' />
                    </Link>
                </div>
        </div>
    )
}