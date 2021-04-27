import React, { useEffect } from "react";
import { connect } from "react-redux";
//import { fetchFact } from "../actions/actions"; - this will change to whatever action I'm creating

const Facts = (props) => {
    useEffect(() => {
        props.fetchFact();
    }, [props.fetchFact]); //what is this line doing? - the CDM?

    if (props.loading) { //include the 'loading' in the initial state in the reducer
        return(
            <>
            <p>Waiting on your next Cat Fact...</p>
            </>
        )
    }

    return(
        <>
            <h3>{props.fact}</h3> {/*This is where I need to see the data, this is meant to display the cat fact*/}
            <button onClick={() => props.fetchFact()}>Fetch Cat Fact!</button>
        
        </>
    )
}

    const mapStateToProps = (state) => {
        return {
            fact: state.fact,                //Here I'm writing the state as props! See how I'm using fact as a prop above in the h3
            loading: state.loading

        }
    };
    const mapDispatchToProps = {fetchFact} //This is the action 

export default connect(mapStateToProps, mapDispatchToProps)(Facts);