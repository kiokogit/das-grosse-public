import './package_card.css'

export const PackageMiniCard = ({pack}) =>{

    return (
        <div className="card_window">
            <div className="card_bordered">
                <div className="card_image">
                    {pack.cover_image && 
                    <img id='coverphoto' src={pack.cover_image} alt='CoverPhoto'/>
                    }
                    <div className="card_title">
                        {pack.title}
                    </div>
                </div>
                <div className='flex_row_few'>
                    <div>
                        
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