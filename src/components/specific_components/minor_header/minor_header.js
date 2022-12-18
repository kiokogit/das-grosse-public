import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PACKAGES_ROUTE } from '../../../routing/routing_constants'
import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { InvisibleBtn} from '../../sharable_components/small_components/buttons/buttons'
import './minor_header.css'

export const MinorHeader = ({searchValue, setSearchValue, search_results=[]}) =>{
    const navigate = useNavigate()

    const {pathname} = useLocation()
    return (
        <div className='flex_to_row'>
            <div className='minor_header_bar'>
                filter by tags:
                <div className='minor_header_titles padding_left'>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}`)} className={`header_tag ${pathname===PACKAGES_ROUTE && 'current_tab'}`}>
                        Offers
                    </div>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}/all`)} className={`header_tag ${pathname===PACKAGES_ROUTE+'/all' && 'current_tab'}`}>
                        All
                    </div>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}/frequent`)} className={`header_tag ${pathname===PACKAGES_ROUTE+'/frequent' && 'current_tab'}`}>
                        Most Popular
                    </div>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}/new`)} className={`header_tag ${pathname===PACKAGES_ROUTE+'/new' && 'current_tab'}`}>
                        Newly added
                    </div>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}/new`)} className={`header_tag ${pathname===PACKAGES_ROUTE+'/new' && 'current_tab'}`}>
                        Wild Safaris
                    </div>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}/new`)} className={`header_tag ${pathname===PACKAGES_ROUTE+'/new' && 'current_tab'}`}>
                        Vacation stays
                    </div>
                    <div onClick={()=>navigate(`${PACKAGES_ROUTE}/new`)} className={`header_tag ${pathname===PACKAGES_ROUTE+'/new' && 'current_tab'}`}>
                        Air
                    </div>
                </div>
            </div>
                <div className='minor_search search_margin'>
                    <SearchInput 
                    placeholder={'Search available packages...'} 
                    />
                </div>
        
        </div>
        )
}