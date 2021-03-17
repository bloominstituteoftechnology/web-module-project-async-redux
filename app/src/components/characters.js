import { fetchData } from '../store'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import Character  from './character'


const CharacterList = (props) => {
  const {fetchData, characterList } = props;

  useEffect(() => {
      fetchData();
  }, [fetchData])

    return (
        <div className='componentWrapper'>
            <h2>The amazingly horrible characters of Rick and Morty... </h2>
            {
                props.characterList.map(character => (
                    <Character key={character.id} character={character} />
                ))
            }

        </div>
    )
}
 const mapStateToProps = (state) => {
     return{
         isLoading: state.isLoading,
         characterList: state.characterList,
         error: state.error,
     };
 };

export default connect(mapStateToProps,{fetchData})(CharacterList);