import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const BeerList = (props) => {

    return(
        <div>
            <h1> Beer List </h1>
            {props.beers.map(beer => {
                return(
                    <div key = {beer.id}> 
                        <div className= 'list-card'>
                            <h2> {beer.name} </h2>
                            <Link to = {`/profile/${beer.name}`}>
                                <img src= {beer.image_url} alt= {`This is an image of beer with a name of ${beer.name}`} />
                            </Link>
                            <h3> {beer.tagline} </h3>
                            <p> ABV: {beer.abv} </p>
                            <p> {beer.description} </p>
                        </div>
                    </div>
                )    
            })}
        </div>
    )
}
export default BeerList;