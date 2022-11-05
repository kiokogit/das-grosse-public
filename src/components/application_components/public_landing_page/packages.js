import { MinorHeader } from "../../specific_components/minor_header/minor_header"
import { PackageList } from "../../specific_components/package_list_card/package_list"


export const Packages = ({packages=[]}) => {
    return (
        <div>
            <MinorHeader />
            <div className="centered_div">
                {packages.length > 0 && 
                    packages.map(pack=> 
                        <div>
                            <PackageList pack={pack}/>
                        </div>
                        )
                }
            </div>
        </div>
    )
}
