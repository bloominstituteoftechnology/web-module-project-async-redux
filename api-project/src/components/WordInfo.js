import React from 'react'
import axios from 'axios'

import { connect } from "react-redux"

function WordInfo(props) {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
    return (
        <div>
            <h2>Word: {props.word}</h2>
            <h2>Part of Speech: {props.partOfSpeech}</h2>
            <h2> Definition: {props.def}</h2>
            <h2>Example: {props.example}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        word: state.info.word,
        partOfSpeech: state.info.partOfSpeech,
        def: state.info.def,
        example: state.info.example
    }
}

export default connect(mapStateToProps, {})(WordInfo);
