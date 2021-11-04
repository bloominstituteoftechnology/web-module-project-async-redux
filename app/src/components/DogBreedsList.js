
   
import React from 'react';
import {connect} from 'react-redux'

import axios from 'axios';

import { fetchSuccess} from './../actions';


const DogBreedsList = ({message, dispatch}) => {




    
      console.log(Object.keys(message))

      const handleClick = () => {
        
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(resp=> {
          console.log(resp.data)
          dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
          
        });
      }
        return (
        <div className="App">
            <h1>{}</h1>
            {  
              Object.keys(message).map( (breeds, key)=> (
                  <p keyid={key}> {breeds}</p>
              ))
            }
            

            <button onClick={handleClick}>Update</button>
        </div>
        );
    

  }
  const mapStateToProps = state =>{
      console.log("currentState", state)
      return {
        message: state.message
      }
  }
// export default DogBreedsList;
export default connect(
    mapStateToProps, 
    {})(DogBreedsList);