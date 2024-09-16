import React from 'react'
import '../App.css';

export default function EachCard(props) {
    console.log("EachCard", props.eachItem);

    return (
        <div className="eachCard">
            <div>
                <img src={props.eachItem.artworkUrl100} alt="artist" />
                <h3>{props.eachItem.artistName}</h3>
                <div><a href={props.eachItem.artistViewUrl}><p>{props.eachItem.artistName} Page</p></a></div>
            </div>
        </div>
    )
}