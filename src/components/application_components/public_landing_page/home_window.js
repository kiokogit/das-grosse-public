// import { PackageManyCards } from "../../specific_components/package_list_card/package_many_cards"
import { useNavigate } from "react-router-dom"
import { ABOUT_ROUTE, CONTACT_ROUTE, PACKAGES_ROUTE } from "../../../routing/routing_constants"
import { COMPANY_CONTACT, COMPANY_LOCATION, COMPANY_NAME, TAG_LINE } from "../../../settings/constants"
import { InvisibleBtn2} from "../../sharable_components/small_components/buttons/buttons"
import { SearchComplete } from "../../specific_components/search_component_complete/search_with_dropdown"

import './home_style.css'
import { packagess } from "./packages_list_data"

export const Home = ({packages=packagess}) => {
    const navigate = useNavigate()

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
                <div className="">
                    <h3>
                        Hot Deals
                    </h3>
                    <div>
                        <div className="landing_fun">
                            <div className="destination_card">
                                <div>
                                    <img alt="" src="https://posanlab.files.wordpress.com/2015/10/travel-flyer.jpg" />
                                </div>
                                <p>
                                    How about a night camping this Christmas?
                                </p>
                            </div>
                            <div className="destination_card">
                                <div>
                                    <img alt="" src="https://img.freepik.com/free-vector/vacation-tours-travel-agency-flyer-design-template_83728-3094.jpg" />
                                </div>
                                <p>
                                    What would you do if you were never scared?
                                </p>
                            </div>
                            <div  className="destination_card">
                                <div>
                                    <img alt="" src="https://images.ctfassets.net/x0s5vw77vftn/ew_article_fid5805_asset/451be76839559d7f4f51ee3538495931/63390-adrenaline.jpg" />
                                </div>
                                <p>
                                    When shall it all happen to be good
                                </p>
                            </div>
                            {/* <div  className="destination_card">
                                <div>
                                    <img alt="" src="https://lh3.googleusercontent.com/p/AF1QipManNY3TC1SyqCggTlWxlty2g9xDeLRCgzeFZP5=s1280-p-no-v1" />
                                </div>
                                <p>
                                    Then all is well
                                </p>
                            </div> */}
                            <div className="destination_card more_button_card">
                                <div>
                                    <img alt="" src="https://lh3.googleusercontent.com/p/AF1QipManNY3TC1SyqCggTlWxlty2g9xDeLRCgzeFZP5=s1280-p-no-v1" />
                                </div>
                                <div className="destination_browse_button">
                                    <h3>Browse More...</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top_destinations">
                    <h3>
                        Top DESTINATIONS
                    </h3>
                    <div className="destination_cards_flex">
                        {packages.map(i=>
                            <div className="destination_card" onClick={e=>navigate(PACKAGES_ROUTE+'/'+i.id)}>
                                <img src={i.cover_image} alt=""/>
                                <h4>
                                    {i.title}
                                </h4>
                                <p>
                                    {i.description}
                                    {i.details}
                                    {i.location}
                                </p>
                                <div className="more_button menu_btn" onClick={e=>navigate(PACKAGES_ROUTE+'/'+i.id)}>
                                        {">>>>>>>"}
                                </div>
                            </div>
                            ).slice(0,3)}
                            <div className="destination_card more_button_card" onClick={e=>navigate(PACKAGES_ROUTE+'/all')}>
                            <img src={packages[3].cover_image} alt=""/>

                                <div className="destination_browse_button">
                                    <h3>Browse More...</h3>
                                    <h3>{packages.length}+</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="search_complete_home">
                    <div>
                        <h3>
                            SEARCH HERE
                        </h3>
                        <SearchComplete />
                    </div>
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
            <div className="about_us_center">
                <h3>
                    ABOUT US
                </h3>
                <div>
                    <p>
                        Founded in 2022, {COMPANY_NAME} seeks to make every adventure as exciting and individual as it can be. 
                    </p>
                    <p>
                        Here at DGA, we seek to bring your adventure to life. To give you an experience of a lifetime.
                    </p>
                    <p>
                        Book and travel with us today
                    </p>
                    <p>
                    <InvisibleBtn2 value={"Learn More"} className={"cancel_btn"} onClick={()=>navigate(ABOUT_ROUTE)} />
                </p>
                </div>
                <div className="offers_home">
                    <h3>What we Offer</h3>
                    <div className="why_us_reasons">
                        <div className="why_reason">
                            <img src="https://icon-library.com/images/transportation-icon-png/transportation-icon-png-29.jpg" />
                            <h5>Transport</h5>From pick up point to the tour destination, and back
                        </div>
                        <div  className="why_reason">
                            <img src="https://icon2.cleanpng.com/20180204/rpw/kisspng-hotel-motel-gratis-clip-art-hotel-png-picture-5a77d69d7edec4.4346610115178031655197.jpg" alt=""/>
                            <h5>Accommodation</h5> In liason with preferred hotels, accommodation for every journey is catered for, in accordance with the package details
                        </div>
                        <div  className="why_reason">
                            <img src="https://img.favpng.com/24/21/9/food-icon-thanksgiving-fill-icon-food-icon-png-favpng-3mbb5g1Ubhi7EHPpjELypuBpn.jpg" alt="" />
                            <h5>Meals</h5> Meals during the tour as provided in the package details
                        </div>
                        <div  className="why_reason">
                            <img src="https://www.freeiconspng.com/thumbs/photography-icon-png/photography-icon-png-15.png" alt="" />
                            <h5>Free Photoshoot</h5> Everyone is entitled to free photoshoot(more than 100photos) during the trip. 
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="reviews_landing">
                <h3>
                    CONTACT US
                </h3>
                <div>
                    <p>
                        Phone: {COMPANY_CONTACT.phones[0]} or {COMPANY_CONTACT?.phones[1]}
                    </p>
                    <p>
                        Email: {COMPANY_CONTACT.emails[0]}
                    </p>
                    <p>
                        Office: {COMPANY_LOCATION.office_address}
                    </p>
                    <p>
                        <InvisibleBtn2 value={"Write to us..."} className={"cancel_btn"} onClick={()=>navigate(CONTACT_ROUTE)} />
                    </p>

                </div>
            </div>
            {/* <PackageManyCards packages={packagess} />
            <PackageManyCards /> */}
        </div>
    )
} 