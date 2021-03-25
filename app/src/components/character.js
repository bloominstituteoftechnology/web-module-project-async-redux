

const Character = (props) => {
    const { character } = props;
      return(
          <div className='characterWrapper'>
              <div className='image'>
                <img src={`${character.image}`} alt={`An image of ${character.name}`} />
              </div>
              <div>
                  <h2>Character: {character.name}</h2>
                  <p>{character.name} is a {character.species} originally from {character.origin.name} </p>
                  <p>Currently resides: {character.location.name}</p>
                  <p>Appearend in {character.episode.length} Episodes. </p>
              </div>
              <div>
                  <button>Add to Fav's</button>
              </div>
          </div>
      )
  }

export default Character