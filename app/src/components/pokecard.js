import styled from 'styled-components'

const StyledDiv = styled.div`
border:2px solid black;
width:48%;
display: inline-block;
`

const PokeCard = (props) => {
    return (
        <StyledDiv>
            <h2>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
        </StyledDiv>
    );
};

export default PokeCard;