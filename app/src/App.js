import "./App.css";
import Generate from "./components/Generate";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div
      className="App"
      style={{ background: "linear-gradient(#e66465, #9198e5)" }}
    >
      <Generate genre={props.genre} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {})(App);
