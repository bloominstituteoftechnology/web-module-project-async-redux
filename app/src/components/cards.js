import React from 'react'
import EachCard from './eachCard'

export default function Cards({ termResults }) {
    console.log("results from cards", termResults);

    return (

        <div className="arrayOfCards">
            {termResults.map((eachItem) => (
                <EachCard eachItem={eachItem} />
            ))}
        </div>
    )
}