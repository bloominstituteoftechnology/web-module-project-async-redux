import React from "react";
import { connect } from "react-redux";
import { search } from "../actions/GifAction";
import { useState } from "react";

const GifForm = (props) => {
    const [currentInput, setCurrentInput] = useState("");
    const { search } = props;
    return (
        <form>
            <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
            />
            <button onClick={() => search(currentInput)}>Search</button>
        </form>
    )
}


export default connect(null, { search })(GifForm);