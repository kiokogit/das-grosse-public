import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useParams } from "react-router-dom"
import { get_package_for_booking } from "../../../actions/packages_actions"
import { MainContainer } from "../../specific_components/booking_components/main_component"

export const Booking = () => {
   
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainContainer package_for_booking={{}} />} />
                <Route path='/predefined/:id' element={<BookingPredefined />} />
            </Routes>
            
        </div>
    )
}

const BookingPredefined = ( ) => {
    const dispatch = useDispatch()

     //  get package id from params
     const {id} = useParams()
     useLayoutEffect(()=>{
         dispatch(get_package_for_booking(id))
     }, [dispatch, id])
 
     const package_for_booking = useSelector(state=> state.package_for_booking)

    return (
        <MainContainer package_for_booking={package_for_booking} />
    )
}