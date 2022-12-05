import { InvisibleBtn } from "../../small_components/buttons/buttons"
import { packagess } from "../../../application_components/public_landing_page/packages_list_data"

import './search_input.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { PACKAGES_ROUTE } from "../../../../routing/routing_constants"

export const SearchInput = ({placeholder}) => {
    const [searchValue, setSearchValue] = useState('')
    const search_results=packagess.filter(pack=> pack.title.includes(searchValue) || pack.description.includes(searchValue) || pack.location.includes(searchValue) || pack.details.includes(searchValue))

    return (
        <div className="search_complete">
            <div className="search_container">
                <input className="search_input" placeholder={placeholder} onChange={e=> setSearchValue(e.target.value)}/>
                <InvisibleBtn switchValue={'Search'} />
            </div>
            <div className={`search_results_card float_card ${searchValue!==''? '':'hidden'}`}>
                Search results 
                <hr />
                {search_results.length < 1 ? <i>No related search results</i>:
                <div>
                    {search_results.map(value=>
                        <div className="column_grids_partition_equal_2">
                        <li key={value.id}>{value.title}</li> <Link to={PACKAGES_ROUTE + '/'+value.id}>
                        View Package 
                    </Link>
                        </div>
                        )}
                     </div>
                }
            </div>
        </div>
    )
}