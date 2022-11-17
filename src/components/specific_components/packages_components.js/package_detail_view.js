import { useEffect } from "react"
import {useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { get_package_detail_view } from "../../../actions/packages_actions"

export const PackageDetailView = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(get_package_detail_view(id))
    })

    const package_detail_view = useSelector(state=>state.package_detail_view)

    return (
        <div>
            {package_detail_view.title}
        </div>
    )
}