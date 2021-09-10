import React from 'react'; 
import { connect } from 'react-redux'; //step 12 
import Brewery from './Brewery';

const BreweryList = props => {
    const { brewery } = props;

    return (<div id='breweryList'>
        {
            brewery.map(brew => {
                return(
                    <Brewery brew={brew}/>
                )
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        brewery: state.brewery
    }
}

export default connect(mapStateToProps)(BreweryList); //step 13 