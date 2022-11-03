import { useState } from "react"
import { PagerCrumbs } from "./pager_crumb"

import './booking_main.css'
import { NextPreviousBtns } from "./next_previous_buttons"
import { BookingPageOne } from "./page_1"
import { BookingPageThree } from "./page_3"


export const MainContainer = () => {
    const [page_no, setPage_no] = useState(1)

    return (
        <div className="whole_page" >
            <div className="booking_container">
                <div>
                    <PagerCrumbs page_no={page_no} setPage_no={setPage_no}/>
                    <div>
                        {page_no===1 && <BookingPageOne />}
                        {page_no===2 && 'Page 2'}
                        {page_no===3 && <BookingPageThree />}
                        {page_no===4 && 'Page 4'}
                    </div>
                    <div className="flex_space_between">
                        <small>* - required fields</small>
                        <NextPreviousBtns current_page={page_no} last_page={4} setPage_no={setPage_no} submit={{}} />
                    </div>

                </div>
            </div>
        </div>
    )
}