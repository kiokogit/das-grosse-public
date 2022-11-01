import { InvisibleBtn } from "../../sharable_components/small_components/buttons/buttons"
import { PackageMiniCard } from "../package_mini_card/package_card"

import './package.css'


export const PackageManyCards = ({packages=[]}) =>{

    return (
        <div>
            <div className="flexrow">
                <div>PACKAGE TITLE</div>
                <div>
                    {packages.length > 6 && 'Arrow left'}
                </div>
                <div>
                    {packages.length >0 && 
                        packages.map(pack => 
                            <PackageMiniCard pack={pack} />
                            )
                        }
                </div>
                <div>
                        <InvisibleBtn switchValue={'View All'} />
                    <div>
                        {packages.length > 6 && 'Arrow Right'}
                    </div>
                </div>
            </div>
        </div>
    )
}