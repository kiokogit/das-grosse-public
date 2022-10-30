import { Footer } from "../../specific_components/footer/Footer"
import { MainBody } from "../../specific_components/main_body/main_body"
import { PackageManyCards } from "../../specific_components/package_list_card/package_many_cards"
import { PublicHeader } from "../../specific_components/public_header/public_header"
import { SearchComplete } from "../../specific_components/search_component_complete/search_with_dropdown"


// import './landing.css'

export const Landing = () =>{

    return (
        <div>
            <PublicHeader />
            <MainBody>
                <SearchComplete />
                <PackageManyCards />
                <PackageManyCards />
            </MainBody>
            <Footer />
        </div>
    )
}