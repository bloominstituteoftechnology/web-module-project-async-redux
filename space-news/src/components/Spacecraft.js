import { connect } from "react-redux";
import { fetchData } from '../store/actions';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner'

const Spacecraft = (props) => {
  // const spacecrafts = useSelector((state) => state.spacecrafts);
    useEffect(() => {
    props.fetchData();
    }, []);
  
  return (
    <div className="spacecraft-wrapper">
      {props.isLoading ? <Loader type='Circles' color='#00BFFF' height={100} width={100} timeout={3000}/> : null}
      {props.error ? <p style={{color: 'red'}}>{props.error}</p>  : null}
      {props.spacecrafts.map((spacecraft) => (
        <div className='spacecraft'>
          <h3 key={spacecraft.id}>{spacecraft.name}</h3>
          <img src={spacecraft.image_url} alt={spacecraft.spacecraft} />
          <p> Description: {spacecraft.description }</p>
          <p> {spacecraft.administrator }</p>
          <p> Founding Year: {spacecraft.founding_year }</p>
          
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    spacecrafts: state.spacecrafts,
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchData})(Spacecraft);
