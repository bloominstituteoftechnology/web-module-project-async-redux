import React,{useEffect} from 'react';
import {connect} from 'react-redux';

import {getMeme} from '../actions';
import MemeList from './MemeList'

const mapStateToProps = state =>{
    return{
        meme: state.meme,
        isFetching: state.isFetching,
        error: state.error
    }
}

const Meme = ({meme, isFetching,error,getMeme}) =>{
    useEffect(() =>{
        getMeme();
        
    },[]);

    const handleClick = () =>{
        getMeme();
        
    }
    

    if(error){
        return <h2>Sorry: {error}</h2>
    }
    if (isFetching){
        return <h2>Looking for some memes!</h2>
    }
    console.log("Meme",meme)
    if(!isFetching){
    return(
        <div className = {"meme"}>
            <h1>Memes!</h1>
            {
            meme.map((ele, i)=>{
                return <MemeList key = {i} title = {ele.title} url = {ele.url}/>
            })
            }
            <button onClick = {handleClick}>New Memes!</button>
        </div>
    )
}
}
export default connect(mapStateToProps, {getMeme})(Meme);