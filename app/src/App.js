import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2></h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: 'Hello I am working!'
  }
}

export default connect(mapStateToProps, { })(App);
