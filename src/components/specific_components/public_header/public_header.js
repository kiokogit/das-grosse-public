import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { logout_public_user } from '../../../actions/user_accounts_actions';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../../routing/routing_constants';
import { COMPANY_CONTACT, COMPANY_NAME } from '../../../settings/constants';
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
        <div className={`main_container`}>
            <div className={`header_body padding_top flex_column ${!user_is_logged_in && ''}`} >
                <div className='flexrow'>
                    <div className='bolden'>
                        <div>
                            {user_is_logged_in && user.first_name +' '+ user.last_name}
                        </div>
                        <div>
                            {time.toLocaleString()}
                        </div>
                    </div>
                    <div id='company_name'>
                        {COMPANY_NAME}
                    </div>
                        <div className='flex_column'> 
                            <Link>
                                <InvisibleBtn2 value={'Email:'+ COMPANY_CONTACT.emails[0]} className='menu_btn' />
                            </Link>
                            <div>
                                <Link>
                                    <InvisibleBtn2 value={'CALL: ' + COMPANY_CONTACT.phones[0]} className='menu_btn' />
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}