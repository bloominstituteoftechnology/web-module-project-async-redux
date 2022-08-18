import React from 'react'
import { connect } from 'react-redux'
import Characters from './Character'
function CharacterList(props) {

    return (
        <div className='container'>
        {props.characters.map(character => (
            <div key={character.id}>
                <Characters 
                name={character.name} 
                status={character.status}
                species={character.species}
                image={character.image}
                />
            </div>
        ))}
        </div>
    )
}

export default connect(st => st)(CharacterList)