import { InvisibleBtn, InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

import './package.css'

export const PackageList = ({pack, setWindow, setSelected_package}) =>{
    
    return (
        <div className='package_list_card'>
            <div className="package_details_section">
                <div className="package_details_no_reviews">
                    <div className="package_details_only">
                        <div className="cover_image_list">
                            <img src={pack.cover_image} alt='cover' />
                        </div>
                        <div className="package_details_only2">
                            <div className="package_title">
                                <h4>{pack.title}</h4>
                            </div>
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
                <div className="package_reviews">
                    <div>
                        View more
                    </div>
                    <div>
                        Stars of ratings
                        5/5
                        show more Reviews
                    </div>
                </div>
            </div>
            <div className="package_action_buttons">
                <div>
                    <InvisibleBtn2 className={'submit_btn'} value='Book Now' onClick={e=>{
                        setSelected_package(pack)
                        setWindow('Booking')}} />
                </div>
                <div>
                    <InvisibleBtn switchValue={'Add to wishlist'} />
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