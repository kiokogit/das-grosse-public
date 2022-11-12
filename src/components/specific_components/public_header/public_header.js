import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { logout_public_user } from '../../../actions/user_accounts_actions';
import {InvisibleBtn2 } from '../../sharable_components/small_components/buttons/buttons';

import './public_header.css'


export const PublicHeader = ({setWindow, setDropdown, dropdrown, user_is_logged_in}) => {
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
                    <div>
                        <InvisibleBtn2 className={'menu_btn'} value='Home' onClick={(e)=>setWindow(e.target.value)}/>
                    </div>
                    <div>
                        <InvisibleBtn2 className={'menu_btn'} value='About Us' onClick={(e)=>setWindow(e.target.value)} />
                    </div>
                    <div>
                        <InvisibleBtn2 className={'menu_btn'} value='Packages' onClick={(e)=>setWindow(e.target.value)} />
                    </div>
                    <div>
                        <InvisibleBtn2 className={'menu_btn'} value='Booking' onClick={(e)=>setWindow(e.target.value)} />
                    </div>
                    <div>
                        <InvisibleBtn2 className={'menu_btn'} value='Journey Planner' onClick={(e)=>setWindow(e.target.value)} />
                    </div>
                    <div>
                        <InvisibleBtn2 className={'menu_btn'} value='More' onClick={e=>setDropdown(!dropdrown)} />
                    </div>
                </div>
            </div>
            <div className={`dropdown_on_header ${!dropdrown && 'hidden_box'}`}>
                <div className='dropdown_card'>
                    {user_is_logged_in? 

                        <div>
                            <Link to='/user_account'>
                                <InvisibleBtn2 value={'Account Settings'} />
                            </Link>
                            <InvisibleBtn2 value={'LogOut'} onClick={e=>log_out_user()}/>
                        </div>
                        :
                        <div> 
                            <Link to='/user_account'>
                                <InvisibleBtn2 value={'Login'} />
                            </Link>
                            <Link to='/user_account'>
                                <InvisibleBtn2 value={'Create Account'} />
                            </Link>
                        </div>
                }
                    <div>
                        <InvisibleBtn2 value={'Contact Us'} onClick={(e)=>{
                            setWindow(e.target.value)
                            setDropdown(false)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}