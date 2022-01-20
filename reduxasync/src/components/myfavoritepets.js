import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPetcat } from '../actions';

const Petcats = ({ 
    petcat, 
    isFetching, 
    error, 
    // fetchPersonLoading,
    getPetcat,
    // fetchPersonSuccess,
    // fetchPersonFail
  }) => {
  
    useEffect(() => {
      getPetcat()
    }, [])
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h2>Fetching pet for ya!</h2>;
    }

    const handleClick = () => {
        getPetcat()
        
      }
    
      return (
        <>
          <div>
            <h2>Say Hi to: {petcat.breed}{petcat.id} </h2>
            <img src={petcat.url}/>
          </div>
          <button onClick={handleClick}>Get new Cat</button>
        </>
      );
    };
    
    const mapStateToProps = state => {
      return {
        petcat: state.petcat,
        isFetching: state.isFetching,
        error: state.error
      };
    };
    
    export default connect(
      mapStateToProps, 
      { getPetcat }
     )(Petcats);
