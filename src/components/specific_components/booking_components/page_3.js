import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"
import { InputVariant } from "../../sharable_components/small_components/input_boxes/input_boxes"


export const BookingPageThree = ({user}) => {

        // if user.contacts.is_email_verified, no verification required.
    return (
        <div>
            <h3>Verify Contact Details</h3>
            <div className="align_all_left spacing_between_elements">
            <div className="spacing_between_elements">
                <div>Verify Email Address</div>
            </div>
            <div className="flex_close_by spacing_between_elements">
                <div>{'kioko@email.com'}</div>
                <InputVariant placeholder={'Enter OTP code here...'} type='text'/>
                <div>
                    <InvisibleBtn2 value={'Send OTP'} className='submit_btn'/>
                    <InvisibleBtn2 value={'Verify'} className='submit_btn' />
                </div>
            </div>
            <div className="spacing_between_elements">
                <div>Verify Phone Number</div>
            </div>
            <div className="flex_close_by spacing_between_elements">
                <div>{'+254703618918'}</div>
                <InputVariant placeholder={'Enter OTP code here...'} type='text'/>
                <div>
                    <InvisibleBtn2 value={'Send OTP'} className='submit_btn' />
                    <InvisibleBtn2 value={'Verify'} className='submit_btn' />
                </div>
            </div>
        </div>
        </div>
    )
}