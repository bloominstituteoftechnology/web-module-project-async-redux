import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Profile = (props) => {

    const { id } = useParams();

    const foundProfile = props.beers.find(beer => {
        return beer.name === id;
    })

    return(
        <div>
            <h2>Beer Profile Page</h2>
            <h3>{foundProfile.name}</h3>
            <p>{foundProfile.description}</p>
            <img src= {foundProfile.image_url} alt= {`This is an image of beer with a name of ${foundProfile.name}`} />
            <p> Food Pairings: {foundProfile.food_pairing}</p>
            
         </div>
    )
}
export default Profile;