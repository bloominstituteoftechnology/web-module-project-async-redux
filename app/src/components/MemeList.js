
import React,{useEffect} from 'react';



 const MemeList =(props)=>{
    return (
        <div className = {"meme-card"}>
            <h2>{props.title}</h2>
            <img src = {props.url}/>
        </div>
    )
}
export default MemeList;