import { Link, useLocation } from 'react-router-dom'
import { PACKAGES_ROUTE } from '../../../routing/routing_constants'
import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { InvisibleBtn} from '../../sharable_components/small_components/buttons/buttons'
import './minor_header.css'

export const MinorHeader = ({searchValue, setSearchValue, search_results=[]}) =>{

    const {pathname} = useLocation()
    return (
        <div className='flex_to_row'>

            <div className='minor_header_bar'>
                <div className='minor_header_titles padding_left'>
                    <Link to={`${PACKAGES_ROUTE}`} className={`${pathname===PACKAGES_ROUTE && 'current_tab'}`}>
                        <InvisibleBtn switchValue={'Home'} />
                    </Link>
                    <Link to={`${PACKAGES_ROUTE}/all`} className={`${pathname===PACKAGES_ROUTE+'/all' && 'current_tab'}`}>
                        <InvisibleBtn switchValue={'ALL'} />
                    </Link>
                    <Link to={`${PACKAGES_ROUTE}/frequent`} className={`${pathname===PACKAGES_ROUTE+'/frequent' && 'current_tab'}`}>
                        <InvisibleBtn switchValue={'FREQUENT'} />
                    </Link>
                    <Link to={`${PACKAGES_ROUTE}/new`} className={`${pathname===PACKAGES_ROUTE+'/new' && 'current_tab'}`}>
                        <InvisibleBtn switchValue={'NEW'} />
                    </Link>
                    <Link to={`${PACKAGES_ROUTE}/faqs`} className={`${pathname===PACKAGES_ROUTE+'/faqs' && 'current_tab'}`}>
                        <InvisibleBtn switchValue={'FAQs'} />
                    </Link>
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