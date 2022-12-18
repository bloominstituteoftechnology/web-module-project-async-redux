import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Header = (props) => {
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


export default Header;