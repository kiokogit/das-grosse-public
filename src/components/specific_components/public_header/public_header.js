import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { COMPANY_CONTACT} from '../../../settings/constants';
import {InvisibleBtn2 } from '../../sharable_components/small_components/buttons/buttons';

import './public_header.css'


export const PublicHeader = ({ user_is_logged_in, user, setOpensidebar, opensidebar}) => {

    // real time time
    const [time, setTime] = useState('');
    useEffect(()=>{
      setInterval(()=>{ let nwDate = new Date(); setTime(nwDate)}, 1000);
    },[])


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
                        <div id='side_bar_button' className={`side_bar_button`} onClick={e=>setOpensidebar(!opensidebar)}>
                            <img src='https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png' alt=''/>
                        </div>
                    </div>
                    <div id='company_name'>
                        {/* {COMPANY_NAME} */}
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