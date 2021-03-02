import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './PokemonCard.module.css'
import { Card, Image } from 'react-bootstrap';
import { setShow } from '../../redux/actions/modalViewActions'
import { addSelectedPokemon } from '../../redux/actions/pokemonsActions'


const PokemonCard = ({ name, imageIndex, setShow, addSelectedPokemon, modalViewState, url}) => {
  const [pokemonName] = useState(name)
  const [pokemonImageIndex] = useState(imageIndex)
  const [pokemonUrl] = useState(url)
  const [pokemonDescriptionUrl] = useState(`https://pokeapi.co/api/v2/pokemon-species/${imageIndex}/`)
  const [imageURL] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/')

  const handleClick = (e) => {
    addSelectedPokemon(
      {
        name: pokemonName, 
        imageIndex: pokemonImageIndex, 
        image: `${imageURL}${pokemonImageIndex}.png`
      }, 
      pokemonUrl,
      pokemonDescriptionUrl
    )
    setShow(modalViewState)
}

  return (
    <div className={styles.component}>
        <Card className={styles.card} onClick={handleClick}>
          <Image variant="top" src={`${imageURL}${pokemonImageIndex}.png`} className={styles.image} fluid />
          <Card.Footer className={styles.footer}>
            <small className="text-muted">{pokemonName}</small>
          </Card.Footer>
        </Card>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    modalViewState: state.modalView.showWindow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
    addSelectedPokemon: (pokemon, url, url2) => dispatch((addSelectedPokemon(pokemon, url, url2)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard)