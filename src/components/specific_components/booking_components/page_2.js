import { Input, RadioInput} from '../../sharable_components/small_components/input_boxes/input_boxes'

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
        },
        optional_identification: {
            gender:"male",
            age:"25",
            disability_status:"N/A"
        }
    }
    

    return (
        <div>
            <h3>Applicant's Personal Details</h3>
            <div className="column_grids_partition_equal spacing_between_elements">
                <div className='border_right'>
                    <h5>Contact Details</h5>
                    <div>
                    </div>
                    <div className='spacing_between_elements align_all_left'>
                        <div>
                        {'Full Names *'}
                        </div>
                        <Input type='text' placeholder='eg John Doe' />
                        <div>
                        {"Phone Number *"}
                        </div>
                        <Input type='number' placeholder='eg 0706332554' />
                        <div>
                        {'Email *'}
                        </div>
                        <Input type='text' placeholder='eg john.doe@example.com' />
                        <div>
                        </div>
                    </div>
                </div>
                <div className='border_right'>
                    <h5>Location Details</h5>
                    <div className='align_all_left'>
                        <div>
                        {'Country *'}
                        </div>
                        <Input type='text' placeholder='eg Kenya' />
                        <div>
                        {"County/State"}
                        </div>
                        <Input type='text' placeholder='eg Nakuru' />
                        <div>
                            {'City/Town'}
                            <Input type='text' placeholder='eg Naivasha' />
                        </div>
                    </div>
                </div>
                <div className='border_left'>
                    <h5>Optional Identification</h5>
                    <small className='margin_around'><i>Help Us know how to address and identify you</i></small>
                    <div className='align_all_left'>Gender</div>
                    <div>
                    <RadioInput name='gender' 
                                type='radio' 
                                value='male' 
                                label='Male' />
                        <RadioInput name='gender' 
                                type='radio' 
                                value='female'     
                                label='Female' />
                        <RadioInput name='gender' 
                                type='radio' 
                                value='other' 
                                label='Other' />
                        <RadioInput name='gender' 
                                type='radio' 
                                value='not_to_say' 
                                label='Prefer not to Say' />
                    </div>
                    <div className='align_all_left'>Age</div>
                    <Input type={'number'} />
                    <div className='align_all_left'>Any physical disability</div>
                    <Input type={'text'} placeholder='eg. Type or N/A'/>
                </div>
            </div>
            <div className='align_all_left spacing_between_elements'>
                Prefered mode of payment *
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
                </div>
                <div className="spacing_between_elements"></div>
        </div>
    )
}