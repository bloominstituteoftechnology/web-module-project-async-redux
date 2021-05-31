import React, { useEffect } from 'react'
import styled from "styled-components"
import { connect } from 'react-redux';
import Card from "./Card"
import { getCharacter } from "../actions/actions" 

const StyledHeader = styled.div`
    @import url("./index_files/get-shwifty.ttf");

    @font-face{
    font-family:Get Schwifty;
    src:'./index_files/get-shwifty.ttf';

    h1{
        font-family: Get Schwifty;
        font-size: 3rem;
        color: hsla(120, 100%, 25%, 0.9);
        text-shadow: 2px 2px lime  ;
    }
}
`


export const Header = (props) => {
    //  useEffect(() => {
    //     props.getCharacter();
    //   }, []);
    //   console.log(props.getCharacter())
    const handleClick = (e)=>{
        console.log("button Clicked")
        // e.preventDefault();
        props.getCharacter()
        
    }

    if(props.error){
        return<h2>{props.error}</h2>
    }
    if(props.isFetching){
        return <h2>Wait for it</h2>
    }


    return (
        <StyledHeader>
            <h1>We gotta Get Schwifty</h1>
            <button
            onClick = {handleClick}>Get Schwifty</button>
            <div>
                {props.character.map((char) => {
                    return <Card character = {char}></Card>
                })}
            </div>
        </StyledHeader>
    )
}
const mapStateToProps = state => {
    return{
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps,{getCharacter})(Header);