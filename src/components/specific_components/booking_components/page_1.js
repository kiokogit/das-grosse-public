import { useState } from 'react'
import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { InvisibleBtn2 } from '../../sharable_components/small_components/buttons/buttons'
import { Input, RadioInput, TextArea } from '../../sharable_components/small_components/input_boxes/input_boxes'

import './pages.css'

export const BookingPageOne = (booking_details) => {
    const [package_type, setPackage_type] = useState('None')
    booking_details = {
        ...booking_details,
        destination:{
            package_type:package_type,
            location: false,
            preferences:["List of strings"]
        },
        travel_details:{
            no_of_adults:2,
            no_of_children:2,
            preferred_mode_of_transport: "air",
            further_particulars: ["None"]
        },
        dates_of_travel:{
            from:"Date",
            to:"date",
            no_of_days:"",
            no_of_nights:""
        },
        cost_details:{
            calculated_cost:"None calculated",
            quotation_order_placed:"False"
        }
    }
    

    return (
        <div>
            <h3>Package Details</h3>
            <div className="column_grids_partition">
                <div className='border_right'>
                    <h5>Destination</h5>
                    <div>
                        <RadioInput 
                            name='package_type' 
                            type='radio' 
                            value='predefined' 
                            label='Choose your Vacation destination'
                            setValue={setPackage_type}
                            />
                            Or
                        <RadioInput 
                            name='package_type' 
                            type='radio' 
                            value='custom' 
                            label='Order a Custom Vacation Destination' 
                            setValue={setPackage_type}
                            />
                    </div>
                    <div className='spacing_between_elements align_all_left'>
                        {package_type==='predefined' && 
                                <div>
                                    <small className='margin_around'><i>Search among the available packages, and specify details as required. Hit the SEARCH button if your option is not on the dropdown list</i></small>
                                    <SearchInput placeholder={'Search for a package...'} />
                                    <div>
                                        <Input value={booking_details.destination.location || '---No Chosen Destination---'} type='text'/>
                                    </div>
                                    {booking_details.destination.location && 
                                    
                                        <div>
                                            <div>
                                                <img src={package_type}  alt='NoCover'/>
                                            </div>
                                            <div>
                                                <h5>
                                                    Title
                                                </h5>
                                            </div>
                                            <div>
                                                Description
                                            </div>
                                        </div>
                                    }
                                </div>
                        }
                        {package_type==='custom' && 
                                <div>
                                    <small><i>Search by a destination location (eg town, city), hotel name, park, etc, and/or enter comprehensive details for a custom order.</i></small>
                                    <SearchInput placeholder={'Search for a destination...'} />
                                    <div>
                                        <Input value={'---No Chosen Destination---'} type='text'/>
                                    </div>
                                    <div> 
                                        <TextArea label={"Enter the Locations to be visited"} placeholder={'Destinations to be visited during the trip'}/>
                                    </div>
                                    <div> 
                                        <TextArea label={'Further Particulars'} placeholder={'Enter further particulars about the destination'} />
                                    </div>
                                </div>
                        }
                    </div>
                    <div>
                    </div>
                </div>
                <div className='border_right'>
                    <h5>Travel Details</h5>
                    <div>
                    {'No of Persons (Above 12 years)'}
                    </div>
                    <Input type='number' placeholder='eg 5' />
                    <div>
                    {"No of Persons (Below 12 years)"}
                    </div>
                    <Input type='number' placeholder='eg 2' />
                    <div>
                        {'Preferred Mode(s) of Transport'}
                    </div>
                    <div>
                        <RadioInput name='travel_mode' 
                                type='checkbox' 
                                value='air' 
                                label='Air' />
                        <RadioInput name='travel_mode' 
                                type='checkbox' 
                                value='road' 
                                label='Road' />
                        <RadioInput name='travel_mode' 
                                type='checkbox' 
                                value='rail' 
                                label='Rail' />
                        <RadioInput name='travel_mode' 
                                type='checkbox' 
                                value='any' 
                                label='Any' />
                    </div>
                    <TextArea label={'Any requirements for the trip'} placeholder={'eg persons with disabilities, etc'} />
                </div>
                <div className='border_left'>
                    <h5>Dates</h5>
                    <div className='align_all_left'>From *</div>
                    <Input type={'date'} />
                    <div className='align_all_left'>To</div>
                    <Input type={'date'} />
                    <div className='align_all_left'>No of Days</div>
                    <Input type={'number'}/>
                    <div className='align_all_left'>No of Nights</div>
                    <Input type={'number'} />
                    {package_type==='predefined' && 
                        <div>
                            <InvisibleBtn2 value={'Calculate Initial Cost'} className='submit_btn' />
                            <div> 
                                <InvisibleBtn2 value={booking_details.cost_details.calculated_cost} />
                            </div>
                        </div>
                    }
                    {package_type==='custom' && 
                    <div>
                        <small>
                            <i>
                                You may place an order for quotation, and proceed with booking. You will not be asked to pay until you confirm your order cost details from us.
                            </i>
                        </small>
                            <div>
                            <InvisibleBtn2 value={'Place order for quote'} className='submit_btn' />
                            </div>
                         </div>
                    }
                </div>
            </div>
        </div>
    )
}