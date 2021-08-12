import React, {useEffect} from "react";
import { getMonster, fetchFail } from "../actions/actions";
import {connect} from "react-redux";
import "./monster.css"


//MOnster function, pass in magic props
const Monster = (props) =>
{
    //destructure props
    const {monster,  isFetching, error} = props;

   //const name = props.name;
    //Create the useEffect hook that comes in from actions
    useEffect(() => 
    {
        //Call the getMonster function
        props.getMonster();

        //Empty dependency to prevent endless calls
    },[]);

    /* Switch to a switch */
    if (error) { return <p> ERROR, HUMAN! </p>  }

    if (isFetching) {return <p> The Monster is coming; be patient! </p>}

    //Click handler to get a monster
    const handleClick = () => 
    {
        props.getMonster();
    }


    return (
        <>
            <div className = "topDiv">
                <div >
                    <div className = "header">
                        <h1> D&D Random Monster Generator </h1>
                        <h2> Monster: {monster.name}</h2>
                    </div>
                    <div className = "subDiv"> Alignment: {monster.alignment}</div>
                    <div className = "subDiv"> Type: {monster.type}</div>
                    <div className = "subDiv"> Size: {monster.size}</div>
                    <div className = "subDiv"> Special Abilities: </div>
                    {/* <div>{special_abilities}</div> */}
                        
                    {/* {special_abilities.map((item,i) => (
                         <p key={i}> {item.name} in a {item.desc} size.</p>
                    ))}
                    </div> */}
                    
                       
                </div>
                <button onClick={handleClick}>Get new monster</button>
                <button onClick={()=> { props.fetchFail("Pressed the Error button!!!"); }}> Error Button</button>
            
            </div>    
        </>
    )
}

//Map state to props
const mapStateToProps = state => 
{
    return {
      monster: state.monster,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(mapStateToProps, { getMonster, fetchFail })(Monster);