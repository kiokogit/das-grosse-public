import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { logout_public_user } from "../../../actions/user_accounts_actions"
import { ABOUT_ROUTE, BOOKING_ROUTE, CONTACT_ROUTE, FAQS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PACKAGES_ROUTE, PLANNER_ROUTE, REGISTER_ROUTE } from "../../../routing/routing_constants"
import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

import image from './dga_logo.png'

export const SideBar = ({user_is_logged_in}) => {

    const [showMore, setShowMore] = useState(false)

    const {pathname} = useLocation()
    const dispatch = useDispatch()

    // log out
    const log_out_user = () => {
        console.log('User logged out')
        dispatch(logout_public_user())
    }

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
                {/* <Link to={BOOKING_ROUTE} className={`nav_link ${pathname.startsWith(BOOKING_ROUTE) && 'current_nav'}`}>
                    <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='Booking' />
                </Link> */}
                {user_is_logged_in && 
                <Link to={PLANNER_ROUTE} className={`nav_link ${pathname.startsWith(PLANNER_ROUTE) && 'current_nav'}`}>
                    <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='Journey Planner' />
                </Link>
                }
                <Link to={CONTACT_ROUTE} className={`nav_link ${pathname.startsWith(CONTACT_ROUTE) && 'current_nav'}`} >
                    <InvisibleBtn2 value={'Contact Us'} className={'menu_btn side_bar_btn'}/>
                </Link>
                <Link to={ABOUT_ROUTE} className={`nav_link ${pathname.startsWith(ABOUT_ROUTE) && 'current_nav'}`}>
                    <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='About Us' />
                </Link>
                <Link to={FAQS_ROUTE} className={`nav_link ${pathname.startsWith(FAQS_ROUTE) && 'current_nav'}`}>
                    <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='FAQs' />
                </Link>
                {/* <Link className="nav_link" onMouseOver={e=> setShowMore(true)} onMouseOut={e=>setShowMore(false)}>
                    <InvisibleBtn2 className={'menu_btn side_bar_btn'} value='More >' />
                </Link> */}
                {showMore &&
                <div onMouseOver={e=> setShowMore(true)} onMouseOut={e=>setShowMore(false)}>
                {user_is_logged_in? 
                    <div >
                        <Link to='/user_account' className='nav_link'>
                            <InvisibleBtn2 value={'Account Settings'} className={'menu_btn side_bar_btn'}/>
                        </Link>
                        <Link to={HOME_ROUTE} className='nav_link'>
                            <InvisibleBtn2 value={'LogOut'} className={'menu_btn side_bar_btn'} onClick={e=>log_out_user()}/>
                        </Link>
                    </div>
                    :
                    <div > 
                        <Link to={LOGIN_ROUTE} className='nav_link'>
                            <InvisibleBtn2 value={'Login'} className={'menu_btn side_bar_btn'} />
                        </Link>
                        <Link to={REGISTER_ROUTE} className='nav_link'>
                            <InvisibleBtn2 value={'Create Account'} className={'menu_btn side_bar_btn'} />
                        </Link>
                    </div>
                    }
                    </div>
                }
            </div>
        </div>
    )
}