import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { allMortys } from '../actions/index';


const Morty = (props) => {
    useEffect(() => {props.allMortys(); }, []);
    console.log('THIS THAT DATA YO', props)
    if (props.loading) {
        return<div><h2>Loading...</h2></div>
    }

    return (
        <div>
            <h1>Rick And Morty </h1>
            {props.characters.map((person, index) => (
                <div>
                    <img src={person.image} alt=""/>
                    <p>Hello, {person.name} you are {person.status}</p>
                </div>
            ))}
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        loading: state.loading,
        characters: state.characters,
        error: state.error
    }
}

export default connect(mapStatetoProps, {allMortys})(Morty)