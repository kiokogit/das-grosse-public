import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { logout_public_user } from '../../../actions/user_accounts_actions';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../../../routing/routing_constants';
import {InvisibleBtn2 } from '../../sharable_components/small_components/buttons/buttons';

import './public_header.css'


export const PublicHeader = ({ user_is_logged_in, user}) => {

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
                        {'Das Grosse Arbenteur' }
                    </div>
                    <div className='small_font'>
                        {time.toString()}
                    </div>
                </div>
                <div className='flexrow'>
                    <div>
                        {user_is_logged_in && user.email}
                    </div>
                    {user_is_logged_in? 
                        <div className='flexrow'>
                            <Link to='/user_account'>
                                <InvisibleBtn2 value={'Account Settings'} className='menu_btn' />
                            </Link>
                            <div>
                                <InvisibleBtn2 value={'LogOut'} className='menu_btn' onClick={e=>log_out_user()}/>
                            </div>
                        </div>
                        :
                        <div className='flexrow'> 
                            <Link to={LOGIN_ROUTE}>
                                <InvisibleBtn2 value={'Login'} className='menu_btn' />
                            </Link>
                            <div>
                                <Link to={REGISTER_ROUTE}>
                                    <InvisibleBtn2 value={'Create Account'} className='menu_btn' />
                                </Link>
                            </div>
                        </div>
                        }
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}