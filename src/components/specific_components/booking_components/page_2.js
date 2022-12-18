import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Input, InputText, InputVariant, RadioInput} from '../../sharable_components/small_components/input_boxes/input_boxes'

import './pages.css'

export const BookingPageTwo = ({booking_details, setBookingDetails}) => {  
    const user_is_logged_in = useSelector(state =>state.logged_in_user_status)
    const user = useSelector(state=>state.logged_in_user_details)
    const [use_my_profile, setUseProfile] = useState(false)
    const [create_account, setCreateAccount] = useState(false)
    const [contact_details, setContactDetails] = useState({})
    const [new_account_details, setNewAccountDetails] = useState({...contact_details})

    booking_details = {
        ...booking_details,
        location: {
            country:"Kenya",
            county_state:"Nakuru",
            city_town:"Naivasha"
        }
    }

    useEffect(()=>{
        setBookingDetails({...booking_details, contacts:{...contact_details}})
    }, [contact_details])

    return (
        <div>
            <h3>Applicant's Personal Details</h3>
            <div className="flex_column spacing_between_elements">
                <div className=''>
                    <div className='subsection_header'>
                        <h5>Contact Details</h5>
                    </div>
                    <div>
                    </div>
                    <div className='spacing_between_elements align_all_left'>
                        <div>
                            {user_is_logged_in &&  <RadioInput name='travel_mode' 
                                            type='checkbox' 
                                            value='use_my_details' 
                                            label='Use My Profile details'
                                            setValue={e=> {
                                                setUseProfile(!use_my_profile)
                                                setContactDetails({...user})
                                            }}
                                            /> }
                        <div>
                            </div>
                       
                        </div>
                        <div>
                        {'First Name *'}
                        </div>
                        <InputText type='text' value={contact_details?.first_name} placeholder={'eg Joe'}
                        onChange={(e)=>setContactDetails({...contact_details, first_name:e.target.value})} />
                        <div>
                        {'Middle Name'}
                        </div>
                        <InputText type='text' value={contact_details?.middle_name} placeholder='eg Doe'
                        onChange={(e)=>setContactDetails({...contact_details, middle_name:e.target.value})} />
                        <div>
                        {'Last Name *'}
                        </div>
                        <InputText type='text' value={contact_details?.last_name} placeholder='eg Jung'
                        onChange={(e)=>setContactDetails({...contact_details, last_name:e.target.value})} />
                        <div>
                        {"Phone Number *"}
                        </div>
                        <InputText type='number' value={contact_details?.phone_number} placeholder='eg 0706332554'
                        onChange={(e)=>setContactDetails({...contact_details, phone_number:e.target.value})} />
                        <div>
                        {'Email *'}
                        </div>
                        <InputText type='text' value={contact_details?.email} placeholder='eg john.doe@example.com'
                        onChange={(e)=>setContactDetails({...contact_details, email:e.target.value})} />
                        <div>
                        {!user_is_logged_in && <div>
                        <RadioInput name='travel_mode' 
                                            type='checkbox' 
                                            value='create_account' 
                                            label='Create an account for me upon submission' 
                                            setValue={e=>setCreateAccount(!create_account)}
                                            />
                        <div>
                    <small><i>With a DGA account, you can track your booking through the various stages right on the journey planner tab</i></small>

                        </div> </div>}
                        {create_account &&
                        <div>
                            <div>
                            {'Password *'}
                            </div>
                            <InputVariant type='password' value={new_account_details?.password} placeholder='Create a password'
                            setValue={e=> setNewAccountDetails({...new_account_details, password:e.target.value})} />
                            <div>
                            {'Confirm Password *'}
                            </div>
                            <InputVariant type='password' value={new_account_details?.password} placeholder='Confirm the above password' 
                            setValue={e=> setNewAccountDetails({...new_account_details, confirm_password:e.target.value})}/>
                        </div>
                        }
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='subsection_header'>
                        <h5>Location Details</h5>
                    </div>
                    <div className='align_all_left'>
                        <div>
                        {'Country *'}
                        </div>
                        <InputText type='text' placeholder='eg Kenya' />
                        <div>
                        {"County/State"}
                        </div>
                        <InputText type='text' placeholder='eg Nakuru' />
                        <div>
                            {'City/Town'}
                            <InputText type='text' placeholder='eg Naivasha' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='align_all_left spacing_between_elements'>
                <div className='subsection_header'>
                    <h5>Payment Preparation</h5>
                </div>
                <div>
                    Preferred Mode of payment
                </div>
            </div>
            <div className="column_grids_partition_equal_2">
                <div className="flex_to_row">
                        <RadioInput name='payment_mode' 
                                type='radio' 
                                value='cash' 
                                label='Cash' />
                        <RadioInput name='payment_mode' 
                                type='radio' 
                                value='mobile' 
                                label='Mobile Money' />
                        <RadioInput name='payment_mode' 
                                type='radio' 
                                value='online' 
                                label='Online(Paypal, Flexpay etc)' />
                        <RadioInput name='payment_mode' 
                                type='radio' 
                                value='bank_transfer' 
                                label='Bank Transfer' />
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='align_all_left'>
                    <small><i>This is to help us set up the best method for later use</i></small>
                </div> */}
                <div className="spacing_between_elements"></div>
        </div>
    )
}