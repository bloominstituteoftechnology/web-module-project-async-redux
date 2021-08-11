import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

const StyledChapter = styled.li`
    padding: 1rem;
    margin: 1rem;
    font-size: 2rem; 
    border: solid 3px gray;
    border-radius: 1rem;
    list-style: none;
`

function Chapter(props) {
    const { chapter: { name_complex, name_simple, name_arabic }, english } = props;

    return (
        <StyledChapter>
            {english ? name_simple : name_arabic} ({name_complex})
        </StyledChapter>
    )
}

const mapStateToProps = (state) => ({
    english: state.english
})

export default connect(mapStateToProps)(Chapter)