import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_user_wishlist } from "../../../actions/packages_actions"
import { AllPackages } from "../../application_components/public_landing_page/packages"


export const WishList = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_user_wishlist())
    })

    const wishlist = useSelector(state=>state.wishlist) || []

    return (
        <div>
            <div>
                <h4>My Wishlist</h4>
            </div>
            <AllPackages packages={wishlist.filter(pack => pack.likes < 10)}/>
        </div>
    )
}