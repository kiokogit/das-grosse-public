import { useEffect, useState } from 'react'
import { InvisibleBtn2 } from '../../sharable_components/small_components/buttons/buttons';

import './public_header.css'


export const PublicHeader = ({setWindow}) => {

    // real time time
    const [time, setTime] = useState('');
    useEffect(()=>{
      setInterval(()=>{ let nwDate = new Date(); setTime(nwDate)}, 1000);
    },[])


    return(
        <div className='header_body padding_top flex_column' >
            <div className='grid_columns'>
                <div id='company_name'>
                    Das Grosse Arbenteur
                </div>
                <div className='small_font'>
                    {time.toString()}
                </div>
            </div>
            <div className='flexrow'>
                <InvisibleBtn2 className={'menu_btn'} value='Home' onClick={(e)=>setWindow(e.target.value)}/>
                <InvisibleBtn2 className={'menu_btn'} value='About Us' onClick={(e)=>setWindow(e.target.value)} />
                <InvisibleBtn2 className={'menu_btn'} value='Packages' onClick={(e)=>setWindow(e.target.value)} />
                <InvisibleBtn2 className={'menu_btn'} value='Booking' onClick={(e)=>setWindow(e.target.value)} />
                <InvisibleBtn2 className={'menu_btn'} value='Journey Planner' onClick={(e)=>setWindow(e.target.value)} />
                <InvisibleBtn2 className={'menu_btn'} value='Contact Us' onClick={(e)=>setWindow(e.target.value)} />
            </div>
        </div>
    )
}