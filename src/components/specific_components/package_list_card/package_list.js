import { Link } from "react-router-dom"
import { BOOKING_ROUTE, PACKAGES_ROUTE } from "../../../routing/routing_constants"
import { InvisibleBtn, InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

import './package.css'

export const PackageList = ({pack}) =>{
    
    return (
        <div className='package_list_card'>
            <div className="package_details_section">
                <div className="package_details_no_reviews">
                    <div>
                        <div className="package_title">
                            <div>{pack.title}</div>
                        </div>
                        <div  className="package_details_only">
                            <div className="cover_image_list">
                                    <img src={pack.cover_image} alt='cover' />
                            </div>
                            <div className="package_details_only2">
                                
                                <div>
                                    Location: {pack.location}{' for pin location, '} <a href="*">click here</a>
                                </div>
                                <div>
                                    Description: {pack.description}
                                </div>
                                <div>
                                    Package Contains: {pack.contains}
                                </div>
                                <div>
                                    Details: {pack.details}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="package_reviews">
                    <Link to={PACKAGES_ROUTE + '/'+pack.id}>
                        View more
                    </Link>
                </div>
            </div>
            <div className="package_action_buttons">
                <div>
                    <div>
                        <Link to={BOOKING_ROUTE+'/predefined/'+pack.id}>
                            <InvisibleBtn2 className={'submit_btn2'} value='Book Now' />
                        </Link>
                    </div>
                    <div>
                        <Link to={'/none'}>
                            {'Add to wishlist'}
                        </Link>
                    </div>
                </div>
                <div className="package_price">
                    {pack.price} /Person
                </div>
            </div>
            {/* <div className="package_my_cost_price"> */}
                {/* <div className="package_my_cost">
                    CALCULATE MY COST
                    <div className="package_my_cost_data">
                        <div className="package_my_cost_period">
                            Period
                            <div>
                                <InputVariant label={"No of days"} type='number' className={'small_input_number'}/>
                            </div>
                            <div>
                                <InputVariant label={"No of nights"} type='number' className={'small_input_number'}/>
                            </div>
                        </div>
                        <div className="package_my_cost_persons">
                            Persons
                            <div>
                                <InputVariant label={"No of adults"} type='number' className={'small_input_number'}/> 
                            </div>
                            <div>
                                <InputVariant label={"No of children"} type='number' className={'small_input_number'}/>
                            </div>
                        </div>
                    </div>
                    <div className="package_my_cost_total">
                        My Total
                        <div>
                            Total input disabled
                        </div>
                    </div>
                </div> */}
                {/* <div className="package_price">
                    PRICE PER PERSON
                    {pack.price}
                </div> */}
            {/* </div>  */}
        </div>
    )
}