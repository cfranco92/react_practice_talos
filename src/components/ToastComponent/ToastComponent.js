import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styles from './Toast.module.css'
import { Toast } from 'react-bootstrap'


const ToastComponent = ({ selectedPokemons, showToast }) => {
  const [pokemonName, setPokemonName] = useState()
  const clases = styles

  useEffect(() => {
    if (selectedPokemons.length > 0) {
      setPokemonName(selectedPokemons[0].name)
    }
  }, [selectedPokemons])

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        // minHeight: '100px',  
      }}
    >
      <Toast
        className={clases.toast}
        show={showToast}
      >
        <Toast.Header closeButton={false}>
          {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
          <strong className="mr-auto">Comparing pokemon</strong>
        </Toast.Header>
        <Toast.Body>{String(pokemonName).toUpperCase()}</Toast.Body>
      </Toast>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPokemons: state.pokemons.selectedPokemons,
    showToast: state.pokemons.showToast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastComponent)