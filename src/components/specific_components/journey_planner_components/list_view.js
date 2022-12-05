import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { get_booking_applications_list} from "../../../actions/packages_actions"

export const ListView = () => {
    let filter = useQuery().get('filter')

    return (
        <div className="table_full">
            <div className="grid_row  flex">
                <div className={`table_headers link ${filter==='pending' && 'current'}`}>
                    <Link to={'?filter=pending'}>
                        Pending
                    </Link>
                </div>
                <div className={`table_headers link ${filter==='ongoing' && 'current'}`}>
                    <Link to={'?filter=ongoing'}>
                        Ongoing
                    </Link>
                </div>
                <div className={`table_headers link ${filter==='approved' && 'current'}`}>
                    <Link to={'?filter=approved'}>
                        Approved
                    </Link>
                </div>
                <div className={`table_headers link ${filter==='started' && 'current'}`}>
                    <Link to={'?filter=started'}>
                        Started
                    </Link>
                </div>
                <div className={`table_headers link ${filter==='completed' && 'current'}`}>
                    <Link to={'?filter=completed'}>
                        Completed
                    </Link>
                </div>
                <div className={`table_headers link ${filter==='cancelled' && 'current'}`}>
                    <Link to={'?filter=cancelled'}>
                        Cancelled
                    </Link>
                </div>
            </div>
            <div className="table_body">
                <ListTab />
            </div>
        </div>
    )
}

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }

export const ListTab = () => {

    const dispatch = useDispatch()
    let filter = useQuery().get('filter')
    useEffect(()=>{
        dispatch(get_booking_applications_list(filter))
    }, [dispatch, filter])

    const list_view = useSelector(state=>state.list_view) || []

    return (
        <div>
            <div className="tab_row">
                <div className="table_cell header2">
                    S/N
                </div>
                <div className="table_cell header2">
                    Reference Number
                </div>
                <div className="table_cell header2">
                    Title
                </div>
                <div className="table_cell header2">
                    Location
                </div>
                <div className="table_cell header2">
                    From
                </div>
                <div className="table_cell header2">
                    Status
                </div>
                <div className="table_cell header2">
                    Actions
                </div>
            </div>
            {list_view.length < 1? `No ${filter} applications` :
                list_view.map(i => 
                    <div key={i.div} className="tab_row">
                        <div className="table_cell">
                            {i.index}
                        </div>
                        <div className="table_cell">
                            {i.reference_number}
                        </div>
                        <div className="table_cell">
                            {i.title}
                        </div>
                        <div className="table_cell">
                            {i.location}
                        </div>
                        <div className="table_cell">
                            {i.date_submitted}
                        </div>
                        <div className="table_cell">
                            {i.application_status}
                        </div>
                        <div className="table_cell">
                            <Link to={`details/${i.id}`}>
                                View More
                            </Link>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}