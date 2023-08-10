import React from 'react'

export default function Characters(props){
return (
    <div className='characterContainer'>
    <div className='characterName'>{props.name}</div>
    <img className ='characterImg' src= {`${props.image}`}/>
    </div>
)
}