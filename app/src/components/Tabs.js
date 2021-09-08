import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTabs, fetchFail } from '../actions';

const Tabs = (props) => {
    const { tabs, isFetching, error } = props;

    useEffect(() => {
        props.getTabs();
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching tabs...</h2>;
    }

    const handleClick = () => {
        props.getTabs();
    }

    const handleError = () => {
        props.fetchFail("YOU HIT THE ERROR BUTTON!!!");
    }

    return(
        <>
            <div>
                <h2>Tabs: {tabs.title} {tabs.tabTypes}</h2>
            </div>
            <button onClick={handleClick}>Get new tabs</button>
            <button onClick={handleError}>ERROR BUTTON</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        tabs: state.tabs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getTabs })(Tabs);