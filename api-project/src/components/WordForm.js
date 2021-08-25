import React from 'react'
import './WordForm.css'
import { updateInput, getDefinition} from "../actions/index"
import { connect } from "react-redux"

function WordForm(props) {
    return (
        <div>
            <input type="text" value={props.word} onChange={(e) => props.updateInput(e.target.value)} placeholder="type a word!"></input>
            <button onClick={() => props.getDefinition(props.word)} className="button">Search!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        word: state.form.word
    }
}


export default connect(mapStateToProps, { updateInput, getDefinition}) (WordForm)
