import { useEffect } from "react"
import {useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { get_package_detail_view, get_package_location_pin } from "../../../actions/packages_actions"
import { BOOKING_ROUTE } from "../../../routing/routing_constants"
import DestinationLocation from "../../sharable_components/large_components/google_maps/google_map_plug"
import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

import "./detail.css"

export const PackageDetailView = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(get_package_detail_view(id))
        dispatch(get_package_location_pin(id))
    })

    const package_detail_view = useSelector(state=>state.package_detail_view)

    return (
        <div className="detail_body">
            <div className="title_n_button">
                <div>
                    {package_detail_view.title}
                </div>
                {/* <div>
                <Link to={BOOKING_ROUTE+'/predefined/'+package_detail_view.id}>
                        <InvisibleBtn2 className={'submit_btn2'} value='Book Now' />
                </Link>
            </div> */}
            </div>
            <div className="detail_components">
                <div className="text_details">
                    <div className="gallery_image">
                        <img alt="" src={package_detail_view.cover_image}/>
                    </div>
                </div>
                <div>
                    <p>
                        {package_detail_view.description}
                    </p>
                    <p>
                        {package_detail_view.contains}
                    </p>
                    <p>
                        {package_detail_view.details}
                    </p>
                    
                </div>
                {/* <div className="location_details">
                    <DestinationLocation />
                </div> */}
                <div>

                    <div>
                        <h3>
                            Available Price Ranges
                        </h3>
                        <div>
                            <p>
                                Price per person: {package_detail_view.price}
                            </p>
                            <p>
                                Price per group of 3: {Number(package_detail_view?.price?.slice(0,-3)) + 450}{package_detail_view?.price?.slice(-3)}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Itinirary
                        </h3>
                        <div>
                            {'none'}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>
                                Gallery
                            </h3>
                        </div>
                        <div className="gallery_details">
                        
                        {package_detail_view.gallery?.map(img =>
                            <div key={img.image} className="gallery_images">
                                <img className="gallery_image" alt="" src={img.image} />
                                <div>
                                    {img.name}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}