import React, { useState } from 'react';
import { connect } from 'react-redux';
import './History.css'

const History = (props) => {
    
    const [isToggled, setIsToggled] = useState(false)
    const handleClick= () =>{
        setIsToggled(!isToggled)
    }
    const history = props.state.history
    console.log('history = ',history)
  return (
    <>
      <div className='history'>
       <button onClick={handleClick}>{isToggled ? 'Hide History' : 'Show History'}</button>
            {isToggled && 
            history.map(item=>{
                return <p>{`• ${item.activity}`}</p>
            })
            }
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
   state
  };
};

export default connect(mapStateToProps)(History);