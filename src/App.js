import { fetchFail, fetchStart, fetchSuccess } from "./actions";
import { connect } from "react-redux"
import axios from "axios";

function App() {
  return (
    <div>

    </div>
  );
}

const getData = () => dispatch => {
  dispatch(fetchStart())
  axios.get("https://api.spacexdata.com/v4/launches/latest")
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(err => dispatch(fetchFail(err)))
}

const mapStateToProps = (state) => ({
  data: state.data,
  error: state.error,
  fetching: state.fetching
})

export default connect(mapStateToProps, { getData })(App);
