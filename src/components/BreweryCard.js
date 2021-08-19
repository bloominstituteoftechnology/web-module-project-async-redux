import React from 'react'

const BreweryCard = (props) => {
    const { brewery } = props

    return (
        <div style={{
                
            }}>
            <div class= 'mug'
            style={{
                display:'flex',
            }}>
            <div class='baseBeerContainer'
                style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <div class='mugBase'
                    style={{
                    boxSizing: 'border-box',
                    display:'inline-block',
                    backgroundColor: 'AliceBlue',
                    height: '350px',
                    width: '250px',
                    borderRadius: '20px',
                    border: '3px solid black',
                    position: 'relative',
                    textAlign:'center',
                    // zIndex: '1'
                }}>
                    <h2>{brewery.name}</h2>
                </div>
                <div class='mugBeer'
                    style={{
                    boxSizing: 'border-box',
                    display:'inline-block flex',
                    flexDirection: 'column',
                    alignItems:'center',
                    backgroundColor: 'gold',
                    height: '265px',
                    width: '225px',
                    borderRadius: '20px',
                    border: '2px solid black',
                    position:'absolute',
                    zIndex: '1',
                    margin:'0 0 20px 0',
                }}>
                    <h3>{brewery.city},</h3>
                    <h3>{brewery.state}</h3>
                </div>
            </div>
            <div class='mugHandleContainer'
                style={{
                boxSizing: 'border-box',
                position: 'relative',
                display:'inline-block',
                height: '350px',
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <div class='mugHandle outside'
                    style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    // zIndex: '5',
                    display:'inline-block',
                    backgroundColor: 'AliceBlue',
                    height: '200px',
                    width: '100px',
                    borderRadius: '50px',
                    border: '2px solid black'
                }}>
                    
                </div>
                <div class='mugHandle inside'
                    style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    zIndex: '5',
                    display:'inline-block',
                    backgroundColor: 'white',
                    height: '160px',
                    width: '65px',
                    borderRadius: '50px',
                    border: '2px solid black'
                }}>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default BreweryCard