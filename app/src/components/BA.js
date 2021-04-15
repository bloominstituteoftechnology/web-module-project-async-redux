import { map } from "async";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { cat } from "../actions/actions";

const CatFact = (props) => {
    useEffect(() => {
        props.cat();
    }, );

    return (
        <>
            <h2>Cat Fact Cat Fact: {props.fact}</h2>
            <button onClick={() => props.cat()}>Update</button>
        </>
    )
}

// Step 3 (again): connect components
const mapStateToProps = (state) => {
    return {
        Fact: state.fact,
        error: state.error,
        loading: state.loading
    }
}

const mapDipatchToProps = {cat}

export default connect(mapStateToProps,mapDipatchToProps)(CatFact);