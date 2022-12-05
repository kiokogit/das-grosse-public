import { Route, Routes } from "react-router-dom"
import { MinorHeader } from "../../specific_components/minor_header/minor_header"
import { Faqs } from "../../specific_components/packages_components.js/packages_faqs"
import { PackageDetailView } from "../../specific_components/packages_components.js/package_detail_view"
import { PackageList } from "../../specific_components/package_list_card/package_list"
import { faqs } from "./packages_faqs_mock"

import { packagess } from "./packages_list_data"
import DestinationLocation from "../../sharable_components/large_components/google_maps/google_map_plug"

import './packages.css'

export const Packages = ({packages=packagess}) => {
    
    return (
        <div>
            <MinorHeader 
                />
            <Routes>
                <Route path="" element={<PackagesLanding />} />
                <Route path="all" element={<AllPackages  packages={packages}/>} />
                <Route path="new" element={<AllPackages  packages={packages.filter(pack => pack.likes < 10)}/>} />
                <Route path="frequent" element={<AllPackages  packages={packages.filter(pack=> pack.likes > 10)}/>} />
                <Route path="faqs" element={<Faqs  qsns={faqs}/>} />
                <Route path=":id/" element={<PackageDetailView />} />
                <Route path=":id/map" element={<DestinationLocation />}/>
            </Routes>
            
        </div>
    )
}


export const AllPackages = ({packages}) => {

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


const PackagesLanding = () => {

    return (
        <div className="landing_fun">
            <div className="fun_box">
                <div>
                    <img alt="" style={{width:"90%", height:"90%"}} src="https://posanlab.files.wordpress.com/2015/10/travel-flyer.jpg" />
                </div>
                <h3>
                    How about a night camping this Christmas?
                </h3>
            </div>
            <div className="fun_box">
                <div>
                    <img alt="" style={{width:"90%", height:"90%"}} src="https://img.freepik.com/free-vector/vacation-tours-travel-agency-flyer-design-template_83728-3094.jpg" />
                </div>
                <h3>
                    What would you do if you were never scared?
                </h3>
            </div>
            <div  className="fun_box">
                <div>
                    <img alt="" style={{width:"100%", height:"100%"}} src="https://images.ctfassets.net/x0s5vw77vftn/ew_article_fid5805_asset/451be76839559d7f4f51ee3538495931/63390-adrenaline.jpg" />
                </div>
                <h3>
                    When shall it all happen to be good
                </h3>
            </div>
            <div  className="fun_box">
                <div>
                    <img alt="" style={{width:"90%", height:"90%"}} src="https://lh3.googleusercontent.com/p/AF1QipManNY3TC1SyqCggTlWxlty2g9xDeLRCgzeFZP5=s1280-p-no-v1" />
                </div>
                <h3>
                    Then all is well
                </h3>
            </div>
        </div>
    )
}