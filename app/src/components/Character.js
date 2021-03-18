import {connect} from 'react-redux';

const Character = (props) => {
  // console.log('props in Character', props);
  const { character } = props;

  return (
    <div className="cards">
      <div className="info">
        <img src={character.img} ></img>
      </div>
      <div className="info">
        name: {character.name}
      </div>
      <div className="info">
        nickname: {character.nickname}
      </div>
      <div className="info">
        portrayed by: {character.portrayed}
      </div>
     

    </div>
  )
};

const mapStateToProps = (state, props) => {
  console.log('props', props)
  return {
    character: props.character
  };
};

export default connect(mapStateToProps, {})(Character);
