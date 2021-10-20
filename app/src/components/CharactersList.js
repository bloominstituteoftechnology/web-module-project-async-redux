import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import { getCharacters } from '../actions';

const CharactersList = (props) => {
    useEffect(() => {
        props.getCharacters();
    },[]);

    return (
        <div>
            <h1>Disney Characters</h1>
            <div className="Character-Div">
                {props.isLoading ? <p>Loading...</p> : null}
                {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
                {props.charactersData.map((character) => (
                    <div className="characterCard" >
                        <img src={character.imageUrl} alt="characterimg" style= {{width: "100px", borderRadius: "10%"}}/>
                    
                        <h4>{character.name}</h4>

                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        charactersData: state.charactersData,
        error: state.error
    };
};

export default connect(mapStateToProps, { getCharacters })(CharactersList);