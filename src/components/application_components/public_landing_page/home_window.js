// import { PackageManyCards } from "../../specific_components/package_list_card/package_many_cards"
import { COMPANY_NAME, TAG_LINE } from "../../../settings/constants"
import { SearchComplete } from "../../specific_components/search_component_complete/search_with_dropdown"

import './home.css'

export const Home = () => {

    return(
        <div>
            <div className="landing_images landing_center">
                <div className="company_details">
                    <div className="company_name">
                        {COMPANY_NAME}
                    </div>
                    <div className="tag_line">
                        {TAG_LINE}
                    </div>
                </div>
            </div>
            <div className="searchhomecontainer">
                <SearchComplete />
            </div>
            {/* <PackageManyCards packages={packagess} />
            <PackageManyCards /> */}
            <div>
                <div>
                    Set of hierarchies
                </div>
                <div>
                    Soccer playing
                </div>
            </div>
        </div>
    )
} 