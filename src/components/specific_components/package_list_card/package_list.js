
export const PackageList = ({pack}) =>{

    return (
        <div>
            <div>
                {pack.cover_image}
            </div>
            <div>
                {pack.description}
            </div>
            <div>
                Add to cart
            </div>
            <div>
               My calculator section
            </div>
            <div>
                {pack.reviews}
            </div>
        </div>
    )
}