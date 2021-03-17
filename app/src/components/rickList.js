import { fetchData } from '../store'
import { useEffect } from 'react'
import { connect } from 'react-redux'


const RickList = (props) => {
  const {fetchData } = props;

  useEffect(() => {
      fetchData();
  }, [fetchData])


    return (
        <div className='componentWrapper'>
            <h2>The amazingly horrible characters of Rick and Morty... </h2>

        </div>
    )
}
 const mapStateToProps = (state) => {
     return{
         isLoading: state.isLoading,
         ricks: state.ricks,
         error: state.error,
     };
 };

export default connect(mapStateToProps,{fetchData})(RickList);