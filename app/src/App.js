import logo from './logo.svg';
import './App.css';
import './index'
import Quote from './Components/yeComponent.js'
import YeImage from './Yeimage/YeImage.jpg'
import styled from 'styled-components';


const WebsiteDiv = styled.div`
      text-align: center;
      background-color: ${props=>props.theme.headerColor};
      color: ${props=>props.theme.primaryColor};
      padding-top:1em;
      padding-bottom:1em;
      margin:.3em;
      border: .8em ridge ${props=>props.theme.tertiaryColor};
`


function App() {
  return (
    <WebsiteDiv className="App">
      <h1> Godly Advice:</h1>
      <Quote/>
      <img src={YeImage} alt='God'/>
    </WebsiteDiv>
  );
}

export default App;
