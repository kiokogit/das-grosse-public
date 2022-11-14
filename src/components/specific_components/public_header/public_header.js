import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { logout_public_user } from '../../../actions/user_accounts_actions';
import { ABOUT_ROUTE, BOOKING_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PACKAGES_ROUTE, PLANNER_ROUTE, REGISTER_ROUTE, CONTACT_ROUTE } from '../../../routing/routing_constants';
import {InvisibleBtn2 } from '../../sharable_components/small_components/buttons/buttons';

import './public_header.css'


export const PublicHeader = ({ user_is_logged_in}) => {
    document.addEventListener('click', (e)=>{
        const dropdwn = document.getElementById('dropdown')
        const dropdownbtn = document.getElementById('dropdown_btn')
        if(!dropdownbtn.contains(e.target)){
            dropdwn.style.display = 'none'
        } else if(dropdownbtn.contains(e.target)){
            dropdwn.style.display = 'block'
        }
    })

    // real time time
    const [time, setTime] = useState('');
    useEffect(()=>{
      setInterval(()=>{ let nwDate = new Date(); setTime(nwDate)}, 1000);
    },[])

    const dispatch = useDispatch()

    // log out
    const log_out_user = () => {
        console.log('User logged out')
        dispatch(logout_public_user())
    }


    return(
        <div className='main_container'>
            <div className='header_body padding_top flex_column' >
                <div className='grid_columns'>
                    <div id='company_name'>
                        {user_is_logged_in && 'Logged in user' }
                    </div>
                    <div className='small_font'>
                        {time.toString()}
                    </div>
                </div>
                <div className='flexrow'>
                    <Link to={HOME_ROUTE}>
                        <InvisibleBtn2 className={'menu_btn'} value='Home'/>
                    </Link>
                    <Link to={ABOUT_ROUTE}>
                        <InvisibleBtn2 className={'menu_btn'} value='About Us' />
                    </Link>
                    <Link to={PACKAGES_ROUTE}>
                        <InvisibleBtn2 className={'menu_btn'} value='Packages' />
                    </Link>
                    <Link to={BOOKING_ROUTE}>
                        <InvisibleBtn2 className={'menu_btn'} value='Booking' />
                    </Link>
                    <Link to={PLANNER_ROUTE}>
                        <InvisibleBtn2 className={'menu_btn'} value='Journey Planner' />
                    </Link>
                    <div id='dropdown_btn'>
                        <InvisibleBtn2 className={'menu_btn'} value='More'/>
                    </div>
                </div>
            </div>
            <div id='dropdown' className={`dropdown_on_header`}>
                <div className='dropdown_card'>
                    {user_is_logged_in? 

                        <div>
                            <Link to='/user_account'>
                                <InvisibleBtn2 value={'Account Settings'} />
                            </Link>
                            <div>
                                <InvisibleBtn2 value={'LogOut'} onClick={e=>log_out_user()}/>
                            </div>
                        </div>
                        :
                        <div> 
                            <Link to={LOGIN_ROUTE}>
                                <InvisibleBtn2 value={'Login'} />
                            </Link>
                            <div>
                                <Link to={REGISTER_ROUTE}>
                                    <InvisibleBtn2 value={'Create Account'} />
                                </Link>
                            </div>
                        </div>
                }
                    <Link to={CONTACT_ROUTE}>
                        <InvisibleBtn2 value={'Contact Us'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}