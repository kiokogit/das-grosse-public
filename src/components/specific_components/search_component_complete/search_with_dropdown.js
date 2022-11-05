import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import {InvisibleBtn2} from '../../sharable_components/small_components/buttons/buttons'
import './search_complete.css'

export const SearchComplete = ( )=>{

    return(
        <div className="main_window">
            <div className='minor_window'>
                <SearchInput placeholder='Search for destinations or packages here...' />
                <p>or</p>
                <p>
                    <InvisibleBtn2 value={'Browse all available destinations'} className="submit_btn" />
                </p>
            </div>
            <div className='dropdown_search'>
                Search dropdown
            </div>
            <div>
            </div>
        </div>
    )
}