import { InputText, RadioInput} from '../../sharable_components/small_components/input_boxes/input_boxes'

import './pages.css'

export const BookingPageTwo = (booking_details) => {    
    booking_details = {
        ...booking_details,
        contacts: {
            full_names:"Kioko Vincent",
            phone_number:"0703618918",
            email:"kiokovincent12@gmail.com"
        },
        location: {
            country:"Kenya",
            county_state:"Nakuru",
            city_town:"Naivasha"
        }
    }
     

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
                        {'First Name *'}
                        </div>
                        <InputText type='text' placeholder='eg John' />
                        <div>
                        {'Middle Name'}
                        </div>
                        <InputText type='text' placeholder='eg Doe' />
                        <div>
                        {'Last Name *'}
                        </div>
                        <InputText type='text' placeholder='eg Jung' />
                        <div>
                        {"Phone Number *"}
                        </div>
                        <InputText type='number' placeholder='eg 0706332554' />
                        <div>
                        {'Email *'}
                        </div>
                        <InputText type='text' placeholder='eg john.doe@example.com' />
                        <div>
                        <RadioInput name='travel_mode' 
                                            type='checkbox' 
                                            value='create_account' 
                                            label='Create an account for me upon submission' />
                        <div>
                    <small><i>With a DGA account, you can track your booking through the various stages right on the journey planner tab</i></small>

                        </div>
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