import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { InvisibleBtn} from '../../sharable_components/small_components/buttons/buttons'
import './minor_header.css'

export const MinorHeader = ({searchValue, setSearchValue, search_results=[]}) =>{

    return (
        <div className='flex_to_row'>

            <div className='minor_header_bar'>
                <div className='minor_header_titles padding_left'>
                    <div>
                        <InvisibleBtn switchValue={'ALL'} />
                    </div>
                    <div>
                        <InvisibleBtn switchValue={'FREQUENT'} />
                    </div>
                    <div>
                        <InvisibleBtn switchValue={'NEW'} />
                    </div>
                    <div>
                        <InvisibleBtn switchValue={'FAQs'} />
                    </div>
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