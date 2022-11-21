import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../../routing/routing_constants'

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
            Journey Planning app
        </div>
    )
}