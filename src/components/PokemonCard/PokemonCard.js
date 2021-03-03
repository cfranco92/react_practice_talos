import React from 'react'
import { connect } from 'react-redux'
import styles from './PokemonCard.module.css'
import { Card, Image } from 'react-bootstrap';
import { setShow } from '../../redux/actions/modalViewActions'
import { addSelectedPokemon } from '../../redux/actions/pokemonsActions'
import { API } from '../../utils'


const PokemonCard = ({
  name,
  imageIndex,
  setShow,
  addSelectedPokemon,
  modalViewState,
  url
}) => {
  const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/'
    + `sprites/pokemon/${imageIndex}.png`

  const addPokemonModelView = (e) => {
    addSelectedPokemon(
      {
        name: name,
        imageIndex: imageIndex,
        image: imageURL
      },
      url,
      `${API}pokemon-species/${imageIndex}/`
    )
    setShow(modalViewState)
  }

  return (
    <div className={styles.component}>
      <Card className={styles.card} onClick={addPokemonModelView}>
        <Image variant='top' src={imageURL} className={styles.image} fluid />
        <Card.Footer className={styles.footer}>
          <small className='text-muted'>{name}</small>
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
    addSelectedPokemon: (pokemon, pokemonUrl, pokemonDescriptionUrl) =>
      dispatch(
        addSelectedPokemon(pokemon, pokemonUrl, pokemonDescriptionUrl)
      )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard)
