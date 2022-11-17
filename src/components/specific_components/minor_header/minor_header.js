import { Link } from 'react-router-dom'
import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { InvisibleBtn} from '../../sharable_components/small_components/buttons/buttons'
import './minor_header.css'

export const MinorHeader = ({searchValue, setSearchValue, search_results=[]}) =>{

    return (
        <div className='flex_to_row'>

            <div className='minor_header_bar'>
                <div className='minor_header_titles padding_left'>
                    <Link to='all'>
                        <InvisibleBtn switchValue={'ALL'} />
                    </Link>
                    <Link to='frequent'>
                        <InvisibleBtn switchValue={'FREQUENT'} />
                    </Link>
                    <Link to='new'>
                        <InvisibleBtn switchValue={'NEW'} />
                    </Link>
                    <Link to='faqs'>
                        <InvisibleBtn switchValue={'FAQs'} />
                    </Link>
                </div>
            </div>
                <div className='minor_search search_margin'>
                    <SearchInput 
                    placeholder={'Search available packages...'} 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    search_results={search_results}
                    />
                </div>
        
        </div>
        )
}