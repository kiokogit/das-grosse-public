import { InvisibleBtn } from "../../small_components/buttons/buttons"
import { packagess } from "../../../application_components/public_landing_page/packages_list_data"

import './search_input.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { PACKAGES_ROUTE } from "../../../../routing/routing_constants"

export const SearchInput = ({placeholder}) => {
    const [searchValue, setSearchValue] = useState('')
    const search_results=packagess.filter(pack=> pack.title.includes(searchValue) || pack.description.includes(searchValue) || pack.location.includes(searchValue) || pack.details.includes(searchValue))
    window.addEventListener('scroll', function(e){ 
        if (document.getElementById('search_elements').contains(e.target)){
            // Clicked in box
            setSearchValue(searchValue)
          } else{
              setSearchValue('')
          }  
      });
      window.addEventListener('click', function(e){   
        if (document.getElementsByClassName('click_listen').contains(e.target)){
          // Clicked in box
          setSearchValue(searchValue)
        } else{
            setSearchValue('')
        }
      });
    return (
        <div  id="search_elements" className="search_complete">
            <div className="search_container">
                <input className="search_input click_listen" placeholder={placeholder} onChange={e=> setSearchValue(e.target.value)}/>
                <InvisibleBtn switchValue={'Search'} />
            </div>
            <div className={`search_results_card float_card ${searchValue!==''? '':'hidden'}`}>
                Search results 
                <hr />
                {search_results.length < 1 ? <i>No related search results</i>:
                <div>
                    {search_results.map(value=>
                        <div className="column_grids_partition_equal_2">
                            <li key={value.id}>{value.title}</li> 
                            <Link id="more_link" to={PACKAGES_ROUTE + '/'+value.id}>
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