import './App.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Cards from './components/cards';
import { getItunesTermResults } from "./actions/index"

function App(props) {
  const [inputValue, setInputValue] = useState("");
  const { isFetching, termResults } = props;

  // useEffect(() => {
  //   if (error) {
  //     return <h2>We got an error trying to search for that: {error}</h2>;
  //   }
  //   if (isFetching) {
  //     return <h2>Fetching person for ya!</h2>;
  //   }
  // });


  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(inputValue)
    setInputValue(e.target.value);
  }

  const onSearchClick = (e) => {
    e.preventDefault();
    props.getItunesTermResults(inputValue);
    console.log("inputValue on Click", inputValue)
    setInputValue("");
  }

  return (
    <div className="App">
      <nav><h1>ITUNES TERMS</h1>
        <div className="navPages">
          <div className="inputDiv">
            <input className="input" type="text" placeholder="Search Itunes" value={inputValue} onChange={handleInputChange} />
            <button onClick={onSearchClick}>Search</button>
          </div>
        </div>
      </nav>
      <div>
        <section>
          {isFetching ? "Getting Itunes Results..." : <Cards termResults={termResults} />}
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    termResults: state.termResults,
    isFetching: state.isFetching,
    error: state.error
  };
}


export default connect(mapStateToProps, { getItunesTermResults })(App);