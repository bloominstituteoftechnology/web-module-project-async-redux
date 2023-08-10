import React from "react";
import { Link, useHistory } from "react-router-dom";
 
const Haeder = (props) => {
    const history = useHistory()
    const returnHome = () => {
        history.push('/')
    }
    return (
        <div>
            <h1 onClick={() => returnHome()}>This is Rebecca Guay</h1>
        </div>
    )
}

export default Headers;