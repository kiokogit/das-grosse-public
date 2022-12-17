// import { PackageManyCards } from "../../specific_components/package_list_card/package_many_cards"
import { COMPANY_NAME, TAG_LINE } from "../../../settings/constants"
import { InvisibleBtn, InvisibleBtn2, InvisibleBtn3 } from "../../sharable_components/small_components/buttons/buttons"
import { SearchComplete } from "../../specific_components/search_component_complete/search_with_dropdown"

import './home_style.css'
import { PackagesLanding } from "./packages"
import { packagess } from "./packages_list_data"

export const Home = ({packages=packagess}) => {

    return(
        <div>
            <div className="landing_images landing_center">
                <div className="company_details">
                    <div className="company_name" id="company_name">
                        {COMPANY_NAME}
                    </div>
                    <div className="tag_line">
                        {TAG_LINE}
                    </div>
                </div>
            </div>
            <div className="searchhomecontainer">
                <div>
                    <h3>
                        Hot Deals
                    </h3>
                    <div>
                        <PackagesLanding />
                    </div>
                </div>
                <div className="top_destinations">
                    <h3>
                        Top DESTINATIONS
                    </h3>
                    <div className="destination_cards_flex">
                        {packages.map(i=>
                            <div className="destination_card">
                                <img src={i.cover_image} alt=""/>
                                <h4>
                                    {i.title}
                                </h4>
                                <p>
                                    {i.description}
                                    {i.details}
                                    {i.location}
                                </p>
                                <div className="more_button menu_btn">
                                    {">>>>>>>"}
                                </div>
                            </div>
                            )}
                        <div className="destination_browse_button">
                            <InvisibleBtn2 value={'Browse More...'} className={'submit_btn'} />
                        </div>
                    </div>
                </div>
                <div className="search_complete_home">
                    <SearchComplete />
                </div>
                <div className="why_us">
                    <h3>
                        WHY CHOOSE US
                    </h3>
                    <div className="why_us_reasons">
                        <div className="why_reason">
                            <img src="https://toppng.com/uploads/preview/50-px-holiday-icon-11553476348zwxogmazqs.png" alt=""/>
                            <p>We are luxurious</p>
                            <p>Get your calls and queries replied to in less than 1 hour, at any day and time</p>
                        </div>
                        <div className="why_reason">
                            <img src="https://cdn-icons-png.flaticon.com/512/3168/3168862.png" alt=""/>
                            <p>We are original</p>
                            <p>We offer the best of safari packages in Kenya and East africa</p>
                        </div>
                        <div className="why_reason">
                            <img src="https://www.clipartmax.com/png/small/182-1828680_person-icons-luggage-holiday-icon-png.png" alt=""/>
                            <p>We are Loyal</p>
                            <p>Get your calls and queries replied to in less than 1 hour, at any day and time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
               Reviews
            </div>
            {/* <PackageManyCards packages={packagess} />
            <PackageManyCards /> */}
        </div>
    )
} 