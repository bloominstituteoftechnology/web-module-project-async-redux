import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../Actions/yeIndex.js';

const Quote =(props)=>{
    const { quote, isFetching, error} = props;

    useEffect(()=>{
        props.getQuote();
    }, [quote]);

    if (error) {
        return <h2>Error: {error} </h2>;
    }

    if (isFetching){
        return <h2> Fetching quote from the lord!</h2>;
    }

    const handleClick=()=>{
        props.getQuote();
    }

    return (
        <>
            <div>
                <h2>The prophet once spit:<br/> {quote}<br/> - Yeezus Christ </h2>
                <button onClick={handleClick}>Hear more words to live by from the prophet.</button>
            </div>
        </>
    );
};

const mapStateToProps = state =>{
    return{
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getQuote})(Quote)