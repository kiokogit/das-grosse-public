import { useState } from "react"
import { Link } from "react-router-dom"
import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"
import { InputNumber, RadioInput } from "../../sharable_components/small_components/input_boxes/input_boxes"


export const BookingPageThree = ({booking_details}) => {
    const [verify_email, setVerifyEmail] = useState(false)
    const [verify_phone, setPhone] = useState(false)

        // if user.contacts.is_email_verified, no verification required.
    return (
        <div>
            <h3>Verify Contact Details</h3>
            <small><i>You must verify at least one of the contacts to submit your booking</i></small>
            <div className="align_all_left spacing_between_elements">
            <div className="spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Verify Email Address</h5>
                </div>
            </div>
            <div className="spacing_between_elements">
                
                 <RadioInput name='travel_mode' 
                                            type='checkbox' 
                                            value='verify_email' 
                                            label='Verify Email'
                                            setValue={e=> setVerifyEmail(!verify_email)}
                                            /> 
                {verify_email && 
                    <div>
                        <div>{booking_details?.contacts?.email}
                            <InputNumber placeholder={'Enter OTP code here...'} type='text'/>
                        </div>
                        <Link to={''}>
                            <InvisibleBtn2 value={'Get OTP'} className='submit_btn'/>
                        </Link>
                        <Link to={''}>
                            <InvisibleBtn2 value={'Verify'} className='submit_btn' />
                        </Link>
                    </div>
                }
                
            </div>
            <div className="spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Verify Phone Number</h5>
                </div>
            </div>
            <div className="spacing_between_elements">
            <RadioInput name='travel_mode' 
                                            type='checkbox' 
                                            value='verify_email' 
                                            label='Verify Phone Number'
                                            setValue={e=> setPhone(!verify_phone)}
                                            /> 
                {verify_phone && 
                <div>
                <div>{booking_details?.contacts?.phone_number}
                <InputNumber placeholder={'Enter OTP code here...'} type='text'/>
                </div>
                <div>
                    <Link>
                        <InvisibleBtn2 value={'Get OTP'} className='submit_btn' />
                    </Link>
                    <Link>
                        <InvisibleBtn2 value={'Verify'} className='submit_btn' />
                    </Link>
                </div>
                </div>}
            </div>
        </div>
        </div>
    )
}