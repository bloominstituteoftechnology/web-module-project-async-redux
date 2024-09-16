import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #doggoCard {
        border: 3px solid black;
        border-radius: 30px;
        width: 500px;
        height: 500px;

        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	    background-size: 400% 400%;
	    animation: gradient 5s ease infinite;
    }

    @keyframes gradient {
	    0% {
		    background-position: 0% 50%;
	    }
	    50% {
		    background-position: 100% 50%;
	    }
	    100% {
		    background-position: 0% 50%;
	    }
    }

    img {
        width: 400px;
        height: 400px;
        margin: 10%;
        border-radius: 30px;
        filter: drop-shadow(12px 12px 12px black);
    }

`

const Dog = (props) => {
    
    const {dog, isFetching, err}= props

    useEffect(()=>{
        props.getData()
    }, [])
    
    const handleClick = ()=> {
        props.getData();
      }

    if (err) {
        return <h2>Much Error: {err}</h2>;
      }
    
      if (isFetching) {
        return <h2>So search, heckin fast!</h2>;
      }
    return (
        <StyledDiv>
            <h1>WOW, such Doggo </h1>
            <div id ='doggoCard'>
                <img src={dog.message} alt ='Heckin Pooch' /><br/>
            </div>
            <div>            
            <button onClick={handleClick}>So click, much new</button>
            </div>
        </StyledDiv>
    );
};

const mapStateToProps = state =>{
  
    
    return{
      
        dog: state.dog,
        isFetching: state.isFetching,
        err: state.err
    }
}
export default connect(mapStateToProps, {getData})(Dog);