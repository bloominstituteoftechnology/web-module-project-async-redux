import { connect } from "react-redux"
import { getDogFacts } from "../actions"

const DogFactsForm = (props) => {
    return (
    <div>
        <button onClick={() => props.getDogFacts(props.fact)}>Get Dog Facts!</button>
    </div>)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        state
    }
}

export default connect(mapStateToProps, { getDogFacts })(DogFactsForm);