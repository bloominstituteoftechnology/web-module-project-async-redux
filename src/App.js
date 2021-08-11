import { fetchFail, fetchStart, fetchSuccess } from "./actions";
import { connect } from "react-redux"
import axios from "axios";
import { useEffect } from "react";
import Chapter from "./components/Chapter";

function App(props) {
  const { getData, data, error, fetching } = props;
  
  useEffect(() => {
    getData()
  }, [])

  if (fetching) (<h2>getting chapters now</h2>)

  if (error) (<h2>Error: {error}</h2>)

  return (
    <main>
      <h1>The Qurans Chapters</h1>
      <ul>
        {data?.map(chapter => 
          <Chapter 
            chapter={chapter} 
            key={chapter.id}  
            />
        )}
      </ul>
    </main>

  );
}

const getData = () => dispatch => {
  dispatch(fetchStart())
  axios.get("https://api.quran.com/api/v4/chapters?language=en")
    .then(res => dispatch(fetchSuccess(res.data.chapters)))
    .catch(err => dispatch(fetchFail(err)))
}

const mapStateToProps = (state) => ({
  data: state.data,
  error: state.error,
  fetching: state.fetching
})

export default connect(mapStateToProps, { getData })(App);
