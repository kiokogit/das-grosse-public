import { useState } from "react"
import { PagerCrumbs } from "./pager_crumb"

import './booking_main.css'

import { NextPreviousBtns } from "./next_previous_buttons"
import { BookingPageOne } from "./page_1"
import { BookingPageThree } from "./page_3"
import { BookingPageTwo } from "./page_2"
import { BookingPageFour } from "./page_4"


export const MainContainer = ({package_for_booking}) => {
    const [page_no, setPage_no] = useState(1)

    const [booking_details, setBookingDetails]  = useState({
        destination:{...package_for_booking}
    })    

    return (
        <div className="whole_page" >
            <div className="booking_container">
                <div>
                    <PagerCrumbs page_no={page_no} setPage_no={setPage_no}/>
                    <div>
                        {page_no===1 && <BookingPageOne 
                        booking_details={booking_details} 
                        setBookingDetails={setBookingDetails}
                        />}
                        {page_no===2 && <BookingPageTwo />}
                        {page_no===3 && <BookingPageThree />}
                        {page_no===4 && <BookingPageFour />}
                    </div>
                    <div className="flex_space_between">
                        <small><i>* - required fields </i></small>
                        <NextPreviousBtns current_page={page_no} last_page={4} setPage_no={setPage_no} submit={{}} />
                    </div>

                </div>
            </div>
        </div>
    )
}