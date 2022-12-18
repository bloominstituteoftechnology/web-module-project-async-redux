import React from "react";
import { useParams,useHistory } from "react-router-dom";

const Card = (props) => {    
    const { cards } = props
    const { cardID } = useParams();
    const card = cards.find(card => card.tcgplayer_id === parseInt(cardID))
    const history = useHistory()

    if(!card){
        history.push('/')
    }

    return (
        <div>
            <button id="backButton"></button>
            {card ? 
            <div>
                <h2>{card.name}</h2>
                <img src={card.image_uris.normal} />
                {card.flavor_text ? <p>card.flavor_text</p> : <p></p>}
                <h2>{card.frame}</h2>
                <h3>{card.scryfall_uri}</h3>
            </div>
            :
            <h1>You shouldn't be here!</h1>
            }
        </div>
    )
}

export default Card;