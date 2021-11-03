import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity } from './actions/activity.actions';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getActivity())
}, [])

const activity = useSelector(state=> state.activity)

const handleClick = () => {
  dispatch(getActivity())
}



  return (
    <div>
      <h2>{activity}</h2>
      <button onClick={handleClick}>Generate New Activity</button>
    </div>

  );
}

export default App;
