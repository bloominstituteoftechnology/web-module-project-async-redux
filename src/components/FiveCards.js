import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fiveCards } from "../actions";
import CardList from "./CardList";
import styled from "styled-components";

const styledRow = styled.div`
    .row {
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 3rem;
    }
    
`


const FiveCards = ({cards, displayCards,fiveCards}) => {
    const newCards = (arr) => {
        const newCards = [...arr]
        return newCards.sort(() => Math.random() - Math.random()).slice(0, 5)
    }
    if(displayCards.length === 0){
        useEffect(() => {
            return fiveCards(newCards(cards))
        }, [])
    }
    

    
    return (
        <div>
            <styledRow className="row">
                {displayCards && displayCards.map((card, idx) => <CardList card={[{card}]} key={idx}/>)}
            </styledRow>
            <button onClick={() => fiveCards(newCards(cards))} className="button-17">Experience the Art</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.card.cards,
        displayCards: state.card.displayCards
    }
}

export default connect(mapStateToProps,{fiveCards,})(FiveCards)
