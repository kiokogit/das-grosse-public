import { useState } from "react"
import { MinorHeader } from "../../specific_components/minor_header/minor_header"
import { PackageList } from "../../specific_components/package_list_card/package_list"

const packagess = [
    {
        cover_image:"data://anucidsbywav",
        title:"My First tour Pack",
        description:"Here is the description in brief",
        contains:"For two, travelling all over",
        details:"Small fire around the camp",
        location:"Here is Nairobi",
        price:"300USD"
    
    }

]

export const Packages = ({packages=packagess, setWindows, setSelected_package}) => {
    const [searchValue, setSearchValue] = useState('')
    
    return (
        <div>
            <MinorHeader 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            search_results={packages}
            />
            <div className="centered_div">
                {packages.length > 0 && 
                    packages.map(pack=> 
                        <div>
                            <PackageList pack={pack} setWindow={setWindows} setSelected_package={setSelected_package}/>
                        </div>
                        )
                }
            </div>
        </div>
    )
}
