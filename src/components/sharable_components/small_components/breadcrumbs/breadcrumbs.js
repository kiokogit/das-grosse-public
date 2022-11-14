
import { Link, useLocation } from 'react-router-dom'
import useBreadCrumbs from 'use-react-router-breadcrumbs'

import './breadcrumb.css'

export const BreadCrumbs = () => {

    const breadcrumbs = useBreadCrumbs()
    const location = useLocation()

    return (
        <nav>
            {breadcrumbs.map(crumb => 
                <Link 
                id='breadcrumb' 
                key={crumb.key} 
                to={crumb.match.url} 
                className={crumb.match.pathname === location.pathname ? "breadcrumb_is_active" : "breadcrumb_not_active"} >
                     { crumb.breadcrumb} /
                </Link>
            )}
        </nav>
    )
}