import { useState } from 'react'
import { SearchInput } from '../../sharable_components/large_components/floating_search_cards/search_input'
import { RadioInput } from '../../sharable_components/small_components/input_boxes/input_boxes'

import './pages.css'

export const BookingPageOne = () => {
    const [package_type, setPackage_type] = useState('None')

    return (
        <div>
            <h3>Package Details</h3>
            <div className="column_grids_partition">
                <div>
                    <div>
                        <RadioInput 
                            name='package_type' 
                            type='radio' 
                            value='predefined' 
                            label='Choose a package'
                            setValue={setPackage_type}
                            />
                        <RadioInput 
                            name='package_type' 
                            type='radio' 
                            value='custom' 
                            label='Request for a specified package' 
                            setValue={setPackage_type}
                            />
                    </div>
                    <div className='spacing_between_elements'>
                        {package_type==='predefined' && 
                                <div>
                                    <SearchInput placeholder={'Search for a package...'} />
                                    <div>Predefined package details</div>
                                </div>
                        }
                        {package_type==='custom' && 
                                <div>
                                    <SearchInput placeholder={'Search for a destination...'} />
                                    <div>Custom package details</div>
                                </div>
                        }
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    Grid 2
                    Grid 2
                    Grid 2
                </div>
                <div>
                    Grid 3
                    Grid 3
                    Grid 3
                </div>
            </div>
        </div>
    )
}