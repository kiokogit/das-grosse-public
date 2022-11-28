// import { PackageManyCards } from "../../specific_components/package_list_card/package_many_cards"
import { SearchComplete } from "../../specific_components/search_component_complete/search_with_dropdown"


const packagess = [
    {
        "title":"Maasai Tour",
        "price":"USD 2522",
        "description":"The toour to all places before the end of the day",
        // "cover_image":"None"
    },
    {
        "title":"Maasai Tour2",
        "price":"USD 2522",
        "description":"The toour to all places before the end of the day",
        // "cover_image":"None"
    }
]

export const Home = () => {

    return(
        <div>
            <SearchComplete search_results={packagess}/>
            {/* <PackageManyCards packages={packagess} />
            <PackageManyCards /> */}
        </div>
    )
}