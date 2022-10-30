import './public_header.css'

import { useEffect, useState } from 'react'


export const PublicHeader = () => {
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
            <div className='flex_row titles_'>
                <div>
                    Menu
                </div>
                <div>
                    About
                </div>
                <div>
                    Packages
                </div>
                <div>
                    Booking
                </div>
                <div>
                    Journey Planner
                </div>
                <div>
                    Contacts
                </div>
            </div>
        </div>
    )
}