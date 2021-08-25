

function YugiohCard (props) {
    
    return (
        <div className='yugioh-card'>
        <h1>{props.name}</h1>
        <img src={props.image} alt="Couldn't find card image!" />

        </div>
    )
}

export default YugiohCard;