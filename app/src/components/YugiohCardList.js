import { connect } from 'react-redux';
import { getYugioh } from '../actions/mainActions';
import YugiohCard from './YugiohCard';


const YugiohCardList = (props) => {

    const test = () => {
        props.getYugioh()
        console.log(props.yugiohCards)
    }
    

    return (
        <div className="big-container">

                <button onClick={test} className='fetch-button'>Fetch Yugioh Cards</button>

            <div className="list-container">
                {props.cardsLoaded ? props.yugiohCards.map(card=> <YugiohCard key={card.id} name={card.name} image={card.card_images.map(image => image.image_url)}/>) : ""}

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        yugiohCards: state.yugiohCards,
        cardsLoaded: state.cardsLoaded
    }
}

export default connect(mapStateToProps, {getYugioh})(YugiohCardList)