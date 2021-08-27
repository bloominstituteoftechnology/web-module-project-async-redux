import { connect } from "react-redux"
import styled from 'styled-components'

const Team = (props) => {
    const { city, id, conference, division, full_name, abbreviation } = props.team
    return (
        <div>
            <Container>
                <div>
                    <Card>
                        <h1>{full_name}</h1>
                        <p>{abbreviation}</p>
                        <p>{conference}ern Conference</p>
                        <p>{division} Divsion</p>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Card = styled.div`
border:2px solid black;
width:auto;
`

export default Team;