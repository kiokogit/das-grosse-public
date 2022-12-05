import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BOOKING_ROUTE } from '../../../routing/routing_constants'
import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { InvisibleBtn2, InvisibleBtn3} from '../../sharable_components/small_components/buttons/buttons'
import { InputDate, InputNumber, InputVariant, RadioInput, TextArea } from '../../sharable_components/small_components/input_boxes/input_boxes'

import './pages.css'

export const BookingPageOne = ({booking_details, setBookingDetails}) => {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue]= useState('')
    const clear_booking_pack = () => {
        dispatch(clear_booking_pack())
    }

    return (
        <div className='align_all_left'>
            <h3>Package Details</h3>
            <div className="flex_column spacing_between_elements">
                <div className=''>
                    <div className='subsection_header'>
                        <h5>Destination</h5>
                    </div>
                    <div>
                        <div className='column_grids_partition_equal_2'>
                            <div className='flex_to_row'>
                                <RadioInput 
                                    name='package_type' 
                                    type='radio' 
                                    value='predefined' 
                                    checked={booking_details?.destination?.package_type==='predefined'? 'checked':false}
                                    label='Choose your Vacation destination'
                                    setValue={e=>setBookingDetails({...booking_details, destination:{package_type:'predefined'}})}
                                    />
                                    <div>
                                        Or
                                    </div>
                                <RadioInput 
                                    name='package_type' 
                                    type='radio' 
                                    value='custom' 
                                    checked={booking_details?.destination?.package_type==='custom'? 'checked':false}
                                    label='Order a Custom Vacation Destination' 
                                    setValue={e=>setBookingDetails({...booking_details, destination:{package_type:'custom'}})}
                                    />
                            </div>
                            <div className='column_grids_partition_equal_2' >
                                <div></div>
                                {booking_details.destination.package_type==='predefined' && 
                                    <Link to={BOOKING_ROUTE +'/'}>
                                        <InvisibleBtn3 switchValue='Clear Package Data' onClick={e=>clear_booking_pack()} />
                                    </Link>
                                }
                            </div>
                        </div>
                        <div className='spacing_between_elements align_all_left'>
                            {booking_details.destination.package_type==='predefined' && 
                                    <div>   
                                        <small className='margin_around'><i>Search among the available packages, and specify details as required. Hit the SEARCH button if your option is not on the dropdown list</i></small>
                                        <SearchInput 
                                            placeholder={'Search for a package...'} 
                                            searchValue={searchValue} 
                                            search_results={[]} 
                                            setSearchValue={setSearchValue} 
                                        />
                                        <div className='display_inline_row'>
                                            <InputVariant value={booking_details?.destination?.location || '---No Chosen Destination---'} type='text'/>
                                            <div> </div>
                                        </div>
                                        {booking_details?.destination?.location && 
                                        
                                            <div>
                                                <div className='cover_image_booking'>
                                                    <img src={booking_details?.destination?.cover_image}  alt='NoCover'/>
                                                </div>
                                                <div>
                                                    <h5>
                                                        {booking_details?.destination?.title}
                                                    </h5>
                                                </div>
                                                <div>
                                                    {booking_details?.destination?.description}
                                                </div>
                                            </div>
                                        }
                                    </div>
                            }
                            {booking_details.destination.package_type==='custom' && 
                                    <div>
                                        <small><i>Search by a destination location (eg town, city), hotel name, park, etc, and/or enter comprehensive details for a custom order.</i></small>
                                        <SearchInput placeholder={'Search for a destination...'} searchValue={searchValue} search_results={[]} setSearchValue={setSearchValue} />
                                        <div>
                                            <InputVariant value={booking_details?.destination?.location || '---No Chosen Destination---'} type='text'/>
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
                </div>
                <div className=''>
                    <div className='subsection_header'>
                        <h5>Travel Details</h5>
                    </div>
                    <div>
                        <div className='column_grids_partition_equal_2'>
                            <div>
                                <div>
                                {'No of Persons (Above 12 years)'}
                                </div>
                                <InputNumber placeholder='eg 5' />
                            </div>
                            <div>
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
                            </div>
                        </div>
                        <div className='column_grids_partition_equal_2'>
                            <div>
                                <div>
                                {"No of Persons (Below 12 years)"}
                                </div>
                                <InputNumber placeholder='eg 2' />
                            </div>
                            <div>
                                
                                <TextArea label={'Any requirements for the trip'} placeholder={'eg persons with disabilities, etc'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='subsection_header'>
                        <h5>Dates</h5>
                    </div>
                    <div> 
                        <div className='column_grids_partition_equal_2'>
                            <div>                 
                                <div>From *</div>
                                <InputDate type={'date'} />
                                <div>To</div>
                                <InputDate type={'date'} />
                            </div> 
                            <div>
                                <div>No of Days</div>
                                <InputNumber placeholder='eg. 2'/>
                                <div>No of Nights</div>
                                <InputNumber placeholder='eg. 3' />
                            </div>
                        </div>
                        {booking_details.destination.package_type==='predefined' && 
                            <div>
                                <div> 
                                    <small><i>Click here to see tentative cost of your trip, exempting any special particulars that may be requested. Final bill shall be confirmed in the invoice.</i></small>
                                </div>
                                <InvisibleBtn2 value={'Calculate Initial Cost'} className='submit_btn' />
                                <div> 
                                    <InvisibleBtn2 value={booking_details?.cost_details?.calculated_cost} />
                                </div>
                            </div>
                        }
                        {booking_details.destination.package_type==='custom' && 
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
        </div>
    )
}