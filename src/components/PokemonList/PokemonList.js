import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons, triggerFetch } from '../../redux/actions/pokemonsActions';
import { Row, Col } from 'react-bootstrap';
import PokemonCard from '../PokemonCard';
import styles from './PokemonList.module.css'
import ModalView from '../ModalView/ModalView';

const PokemonList = ({ pokemonsQuery, fetchPokemons, navBarState, triggerFetch, queryCounter }) => {
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
      <Row className={styles.row}>
        {pokemonsQuery.map((pokemon, index) => {
          return (
            <div key={index + Math.random()}>
              <Col >
                <PokemonCard
                  name={pokemon.name}
                  imageIndex={pokemon.url.split('/')[6]}
                  url={pokemon.url}
                />
              </Col>
            </div>
          )
        })}
      </Row>
      <div>
        <ModalView />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { navBar } = state;
  return {
    queryCounter: state.pokemons.queryCounter,
    pokemonsQuery: state.pokemons.pokemonsArray.filter(
      (pokemon) => pokemon.name.toLowerCase().includes(
        navBar.search.toLowerCase()
      )
    )
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
