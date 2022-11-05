import { useState } from "react"
import { InvisibleBtn } from "../../small_components/buttons/buttons"

import './search_input.css'

export const SearchInput = ({placeholder, search_results=[]}) => {
    const [searchValue, setSearchValue ] = useState('')

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
                        <li key={value}>{value}</li>
                        )}
                     </div>
                }
            </div>
        </div>
    )
}