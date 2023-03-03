import React from 'react';

import {connect} from 'react-redux'

import Joke from './Jokes';

const JokesList = props => {
    const {jokes} = props;

    return (
        <div id = 'jokeList'>
            {
                jokes.map(joke => {
                    return (
                        <div>
                            <Joke joke={joke}/>
                        </div>
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
    }
}

export default connect(mapStateToProps)(JokesList);