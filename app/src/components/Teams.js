import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTeams, fetchFail } from '../actions';

const Teams = (props) => {
    const { teams, isFetching, error } = props;

    useEffect(() => {
        props.getTeams();
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching team...</h2>;
    }

    const handleClick = () => {
        props.getTeams();
    }

    return(
        <>
           {teams && <div>
                <h2>Team Name: {teams.name}</h2>
                <p>Division: {teams.division.name}</p>
                <p>Conference: {teams.conference.name}</p>
                <a href={teams.officialSiteUrl} target='_blank'>Official Site</a>
            </div>}
            <br></br>
            <button onClick={handleClick}>Get new team</button>
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

export default connect(mapStateToProps, { getTeams, fetchFail })(Teams);