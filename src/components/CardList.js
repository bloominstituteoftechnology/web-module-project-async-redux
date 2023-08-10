import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

const Styledimg = styled.img`
    border-radius: 4.75% / 3.5%;
    width: 336px;
    height: 468px;
`
const CardList = (card, key) => {
    const { url } = useRouteMatch();
    return(
        <div key={key}>
            <Link to={`${url}/${card.card[0].card.tcgplayer_id}`}>
                <Styledimg src={card.card[0].card.image_uris.normal} />
            </Link>
        </div>
    )
}
 
export default CardList;