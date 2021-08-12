import React from 'react'

const BreweryCard = (props) => {
    const { brewery } = props

    return (
        <div style={{
                display:'flex',
                justifyContent:'space-around'
            }}>
            <p>{brewery.name}</p>
            <p>{brewery.city}, {brewery.state}</p>
        </div>
    )
}

export default BreweryCard