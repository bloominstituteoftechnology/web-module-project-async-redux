import React from 'react'; 
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

export default BreweryList; 