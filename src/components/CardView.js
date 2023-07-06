import React from "react";
import { connect } from "react-redux";
import { getCards } from "../actions";
import FiveCards from "./FiveCards";

const CardView = ({getCards, isFetching, error, dynamic, displayCards}) => {
    return (
        <div>
            {dynamic ? 
            <div>
                {dynamic && <FiveCards />}
            </div>
            :
            <div>
                <p>{error}</p>
                <button onClick={() => getCards()} className="button-17">Experience the Art</button>
            </div>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isFetching: state.card.isFetching, 
        error: state.card.error,
        dynamic: state.card.dynamic,
        displayCards: state.card.displayCards
    }
}
 
export default connect(mapStateToProps, {getCards})(CardView);