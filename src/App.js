import { getData,  changeLanguage } from "./actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import Chapter from "./components/Chapter";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

function App(props) {
  const { getData, changeLanguage, data, error, fetching } = props;
  
  useEffect(() => {
    getData()
  }, [])


  if (fetching) (<h2>getting chapters now</h2>)

  if (error) (<h2>Error: {error}</h2>)

  return (
    <StyledMain>
      <h1 onClick={changeLanguage}>The Qurans Chapters</h1>
      <ul>
        {data?.map(chapter => 
          <Chapter 
            chapter={chapter} 
            key={chapter.id}  
            />
        )}
      </ul>
    </StyledMain>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  error: state.error,
  fetching: state.fetching
})

export default connect(mapStateToProps, { getData, changeLanguage })(App);
