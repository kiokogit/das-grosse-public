import './package_card.css'

export const PackageMiniCard = ({pack}) =>{

    return (
        <div className="card_window">
            <div className="card_bordered">
                <div className="card_image">
                    <img src={pack.cover_image} alt='CoverPhoto'/>
                </div>
                <div className='flex_row_few'>
                    <div className="card_title">
                        {pack.title}
                    </div>
                    <div className="card_price">
                        {pack.price}
                    </div>
                </div>
                <div className="card_description">
                    {pack.description}
                </div>
            </div>
        </div>
    )
}