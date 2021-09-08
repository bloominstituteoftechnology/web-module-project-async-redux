import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAvs, fetchFail } from '../actions';

const Avs = (props) => {
    const { teams, isFetching, error } = props;

    useEffect(() => {
        // console.log('useEffect works')
        props.getAvs();
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching avs...</h2>;
    }

    const handleClick = () => {
        // console.log('click works')
        props.getAvs();
    }

    return(
        <>
            <div>
                <h2>Team Name: {teams.name}</h2>
            </div>
            <button onClick={handleClick}>Get new name</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        teams: state.teams,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getAvs, fetchFail })(Avs);