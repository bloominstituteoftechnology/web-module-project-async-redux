import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchData } from "../store";

import Character from "./Character";

const Characters = (props) => {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="character-wrapper">
      { props.isLoading ? <h3> Loading characters...</h3>: null }
      { props.error ? <p style={{ color: "red" }}>{ props.error }</p> : null }

      { props.characters.map((char) => (
        // console.log('characters char', char);
          <Character key={char.char_id} character={char} />
      ))
      }
      {/* { props.characters.map((char) => (
        <p key={char.char_id}>{char.name}</p>
      ))} */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    characters: state.characters,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchData })(Characters);
