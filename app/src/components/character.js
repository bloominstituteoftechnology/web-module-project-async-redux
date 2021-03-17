

const Character = (props) => {
    const { character } = props;
      return(
          <div>
              <div>
                <h3>{character.name}</h3>
                <img src={`${character.image}`} alt={`An image of ${character.name}`} />
              </div>

              <p>{character.name} is a {character.species} from {character.origin.name} </p>
          </div>
      )
  }


export default Character