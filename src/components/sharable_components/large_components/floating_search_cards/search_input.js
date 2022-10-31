import { InvisibleBtn } from "../../small_components/buttons/buttons"

import './search_input.css'

export const SearchInput = ({placeholder}) => {
    return (
        <div className="search_complete">
            <div className="search_container">
                <input className="search_input" placeholder={placeholder} />
                <InvisibleBtn switchValue={'Search'} />
            </div>
        </div>
    )
}