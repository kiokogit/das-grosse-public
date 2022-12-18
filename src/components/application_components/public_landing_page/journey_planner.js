import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../../routing/routing_constants'
import { ListView } from '../../specific_components/journey_planner_components/list_view'
import { UserDash } from '../../specific_components/journey_planner_components/user_dash'
import { WishList } from '../../specific_components/journey_planner_components/wishlist'

export const JourneyPlanner = ({user_is_logged_in}) => {
    const dispatch = useDispatch()
    if(!user_is_logged_in){
        dispatch({type:'SHORT_ERROR_ALERT', payload:'Kindly login first to access your journey planner'})
        return (
            <Navigate to={LOGIN_ROUTE} state={{next_url:'/journey_planner'}} />
        )
    }

    return (
        <div>
            <Routes>
                <Route path='/' element={<UserDash />} />
                <Route path='/applications' element={<ListView />}/>
                <Route path='/wishlist' element={<WishList />} />
            </Routes>
            
        </div>
    )
}
