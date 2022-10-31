import './package_card.css'

export const PackageMiniCard = ({card_image, price_tag, description, card_title}) =>{

    return (
        <div className="card_window">
            <div className="card_bordered">
                <div className="card_image">
                    {card_image}
                </div>
                <div className="card_title">
                    {card_title}
                </div>
                <div className="card_price">
                    {price_tag}
                </div>
            </div>
            <div className="card_description">
                {description}
            </div>
        </div>
    )
}