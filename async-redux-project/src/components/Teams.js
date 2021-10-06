import { useEffect } from 'react'
import { connect } from "react-redux"
import { getTeams } from '../actions'
import Team from './Team'
import axios from 'axios'


const Teams = (props) => {

    const allTeams = props.teams


    return (
        <div>
            <button onClick={() => props.getTeams()}>Get Teams</button>
            {allTeams.map(team => <Team team={team} key={team.id} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps, { getTeams })(Teams);
