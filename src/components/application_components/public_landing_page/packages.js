import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { MinorHeader } from "../../specific_components/minor_header/minor_header"
import { Faqs } from "../../specific_components/packages_components.js/packages_faqs"
import { PackageDetailView } from "../../specific_components/packages_components.js/package_detail_view"
import { PackageList } from "../../specific_components/package_list_card/package_list"
import { faqs } from "./packages_faqs_mock"

import { packagess } from "./packages_list_data"

export const Packages = ({packages=packagess}) => {
    const [searchValue, setSearchValue] = useState('')
    
    return (
        <div>
            <MinorHeader 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            search_results={packages} 
                />
            <Routes>
                <Route path="all" element={<AllPackages  packages={packages}/>} />
                <Route path="new" element={<AllPackages  packages={packages.filter(pack => pack.likes < 10)}/>} />
                <Route path="frequent" element={<AllPackages  packages={packages.filter(pack=> pack.likes > 10)}/>} />
                <Route path="faqs" element={<Faqs  qsns={faqs}/>} />
                <Route path="/:id" element={<PackageDetailView />} />
            </Routes>
            
        </div>
    )
}


const AllPackages = ({packages}) => {

    return (
        <div>
            <div className="centered_div">
                {packages.length > 0 && 
                    packages.map(pack=> 
                        <div key={pack.id}>
                            <PackageList pack={pack}/>
                        </div>
                        )
                }
            </div>
        </div>
    )
}
