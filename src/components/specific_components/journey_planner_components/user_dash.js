import { Link } from "react-router-dom"
import './planner.css'

export const UserDash = () => {

    return(
        <div className="grid_row margin_top">
            <Link to={'wishlist'} className='dash_item'>
                <div>
                    {'My Wish List'}
                </div>
            </Link>
            <Link to={'applications?filter=pending'} className='dash_item'>
                <div>
                        My Pending Bookings
                </div>
            </Link>
            <Link to={'applications?filter=ongoing'} className='dash_item'>
                <div>
                        My Ongoing Applications
                </div>
            </Link>
            <Link to={'applications?filter=approved'} className='dash_item'>
                <div>
                        My Approved Applications / Pending Journeys
                </div>
            </Link>
            <Link to={'applications?filter=started'} className='dash_item'>
                <div>
                        My Started Journeys
                </div>
            </Link>
            <Link to={'applications?filter=completed'} className='dash_item'>
                <div >
                      My Completed Journeys
                </div>
            </Link>
            <Link to={'applications?filter=cancelled'} className='dash_item'>
                <div>
                        My Cancelled Journeys
                </div>
            </Link>
        </div>
    )
}