import { PackageMiniCard } from "../package_mini_card/package_card"

import './package.css'
export const PackageManyCards = () =>{

    return (
        <div>
            <div className="flex_row">
                <div>
                    Arrow left
                </div>
                <PackageMiniCard />
                <PackageMiniCard />
                <PackageMiniCard />
                <PackageMiniCard />
                <PackageMiniCard />
                <PackageMiniCard />
                <div>
                    view all button
                    <div>
                        Arrow right
                    </div>
                </div>
            </div>
        </div>
    )
}