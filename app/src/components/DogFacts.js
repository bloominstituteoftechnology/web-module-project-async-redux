import { connect } from "react-redux"

const DogFacts = (props) => {
    return (
    <div>
        {props.fact}
    </div>
        )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {})(DogFacts);