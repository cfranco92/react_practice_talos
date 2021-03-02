import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons, triggerFetch } from '../../redux/actions/pokemonsActions';
import { Row, Col } from 'react-bootstrap';
import PokemonCard from '../PokemonCard';
import styles from './PokemonList.module.css'
import ModalView from '../ModalView/ModalView';

const PokemonList = ({ pokemonsQuery, fetchPokemons, navBarState, triggerFetch, queryCounter }) => {
  const clases = styles

  useEffect(() => {
    fetchPokemons(queryCounter)
  }, [fetchPokemons, queryCounter])

  window.onscroll = (() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      triggerFetch(queryCounter);
    }
  });

  return (
    <div>
      <Row className={clases.row}>
        {pokemonsQuery.map((pokemon, index) => {
          if (pokemon.name.toLowerCase().includes(navBarState.search.toLowerCase())) {
            return (
              <div key={index + Math.random()}>
                <Col >
                  <PokemonCard
                    name={pokemon.name}
                    imageIndex={index + 1}
                    url={pokemon.url}
                  />
                </Col>
              </div>
            )
          } else {
            return ''
          }
        })}
      </Row>
      <div>
        <ModalView />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemonsQuery: state.pokemons.pokemonsArray,
    navBarState: state.navBar,
    queryCounter: state.pokemons.queryCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: (url) => dispatch(fetchPokemons(url)),
    triggerFetch: (counter) => dispatch(triggerFetch(counter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)
