import React from 'react'
import { connect } from 'react-redux'
import { getJoke } from '../actions';




const Jokes = ({ joke, getJoke, isFetching, error }) => {

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }

      if (isFetching) {
        return <h2>Got a joke for ya comin' right up!</h2>;
      }

    return (
      <>
      <div>
        <button className='button-9' role='button' onClick={() => getJoke()}> Click for a Laugh </button>
      </div>
      <div>
        {joke.type && (
          <div>
            {/* <h3>{joke.type}</h3> */}
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        )}
      </div>
      </>

    )
}

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getJoke })(Jokes);
