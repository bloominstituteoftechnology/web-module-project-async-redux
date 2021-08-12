import React from 'react'

const BreweryCard = (props) => {
    const { brewery } = props

    return (
        <div>
            <p>{brewery.id}</p>
        </div>
    )
}

export default BreweryCard