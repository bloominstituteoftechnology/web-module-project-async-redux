import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styledimg = styled.img`
 border-radius: 4.75% / 3.5%;
 width: 336px;
 height: 468px;
`
const Styleddiv = styled.div`
 display: flex;
 margin: auto;
 flex-direction: row-reverse;
 max-width: 50%;
 p {
    color: white;
    margin: atuo;
    border: double thistle;
    margin-right: 5rem;
    flex: none;
 }
 .content {
    width: 30rem;
 }
`
const splash = () => {
    return(
        <div className="outer">
            <Link to='/cards'><button className="button-17">Start browsing</button></Link>
            <h2>Explore the artwork of Magic's most iconic</h2>
            <Styleddiv src="https://cards.srcyfall.io/normal/front/9/1/9125f141-ee2c-4b9f-b9c1-9b9a779002d2.jpg?1666655519"></Styleddiv>
            <p className="content">In this cage, we'll explore the many artworks of Rebecca Guay. From Aboundance to Bitter blossom this is her collection.</p>
        </div>
    )
}

export default splash;