import { Link } from "react-router-dom"
import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"
import { InputNumber } from "../../sharable_components/small_components/input_boxes/input_boxes"


export const BookingPageThree = ({user}) => {

        // if user.contacts.is_email_verified, no verification required.
    return (
        <div>
            <h3>Verify Contact Details</h3>
            <div className="align_all_left spacing_between_elements">
            <div className="spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Verify Email Address</h5>
                </div>
            </div>
            <div className="spacing_between_elements">
                <div>{'kioko@email.com'}
                <InputNumber placeholder={'Enter OTP code here...'} type='text'/>
                </div>
                
                <Link to={''}>
                    <InvisibleBtn2 value={'Get OTP'} className='submit_btn'/>
                </Link>
                <Link to={''}>
                    <InvisibleBtn2 value={'Verify'} className='submit_btn' />
                </Link>
            </div>
            <div className="spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Verify Phone Number</h5>
                </div>
            </div>
            <div className="spacing_between_elements">
                <div>{'+254703618918'}
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
            </div>
        </div>
        </div>
    )
}