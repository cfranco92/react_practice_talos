import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons, triggerFetch } from '../../redux/actions/pokemonsActions';
import { Row, Col } from 'react-bootstrap';
import PokemonCard from '../PokemonCard';
import styles from './PokemonList.module.css'
import ModalView from '../ModalView/ModalView';

const PokemonList = ({ pokemonsQuery, fetchPokemons, triggerFetch, queryCounter }) => {
  useEffect(() => {
    fetchPokemons(queryCounter)
  }, [fetchPokemons, queryCounter])

  window.onscroll = (() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      triggerFetch(queryCounter);
    }
  });

  return (
    <div className={styles.row}>
      <Row>
        {pokemonsQuery.map((pokemon, index) => {
          return (
            <Col xs={6} sm={4} md={3} lg={2} xl={2} key={index + Math.random()}>
              <PokemonCard
                name={pokemon.name}
                imageIndex={pokemon.url.split('/')[6]}
                url={pokemon.url}
              />
            </Col>
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
  return {
    queryCounter: state.pokemons.queryCounter,
    pokemonsQuery: state.pokemons.pokemonsArray,
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
