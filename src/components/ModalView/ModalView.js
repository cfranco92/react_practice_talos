import React from 'react'
import { connect } from 'react-redux'
import ModalOnePokemon from './ModalOnePokemon'
import ModalTwoPokemons from './ModalTwoPokemons'
import { setShow } from '../../redux/actions/modalViewActions'
import { cleanSelectedPokemons } from '../../redux/actions/pokemonsActions'
import { setShowToast } from '../../redux/actions/pokemonsActions'

const ModalView = ({
  setShow,
  modalViewState,
  selectedPokemons,
  cleanSelectedPokemons,
  setShowToast,
  showToast
}) => {
  const cleanPokemonArray = () => {
    setShow(modalViewState)
    cleanSelectedPokemons()
    if (showToast) {
      setShowToast()
    }
  }

  const keepPokemon = () => {
    setShow(modalViewState)
    setShowToast()
  }

  return (
    <>
      {showToast && selectedPokemons.length > 1
        ?
        <ModalTwoPokemons
          selectedPokemons={selectedPokemons}
          modalViewState={modalViewState}
          cleanPokemonArray={cleanPokemonArray}
        />

        :
        <ModalOnePokemon
          selectedPokemons={selectedPokemons}
          modalViewState={modalViewState}
          cleanPokemonArray={cleanPokemonArray}
          keepPokemon={keepPokemon}
        />


      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modalViewState: state.modalView.showWindow,
    selectedPokemons: state.pokemons.selectedPokemons,
    showToast: state.pokemons.showToast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: (oldState) => dispatch(setShow(oldState)),
    cleanSelectedPokemons: () => dispatch(cleanSelectedPokemons()),
    setShowToast: () => dispatch(setShowToast()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalView)
