import React, {useEffect} from 'react';
import {getHero} from './../actions';
import {connect} from 'react-redux';


const Superhero = (props) =>{
    const {hero} = props


    useEffect(() =>{
        props.getHero()
    }, [])


    const handleClick = () =>{
        props.getHero()
    }

    return(
        <>
            <div>
                <h2>{hero.name}</h2>
                <img src = {hero.url} alt = ''/>
            </div>
            <button onClick = {handleClick}>Get new hero</button>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        hero: state.hero
    }
}

export default connect(mapStateToProps, { getHero })(Superhero);