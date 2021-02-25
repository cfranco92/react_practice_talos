import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons, triggerFetch } from '../../redux/actions/pokemonsActions';
import { Row } from 'react-bootstrap';
import Charts from '../ChartTool';
import PokemonCard from '../PokemonCard';
import styles from './PokemonList.module.css'

const PokemonList = ({ pokemonsQuery, fetchPokemons, navBarState, triggerFetch, queryCounter}) => {
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
                <PokemonCard
                  name={pokemon.name}
                  imageIndex={index + 1} />
              </div>
            )
          } else {
            return ''
          }
        })}
      </Row>
      <div>
        <Charts />
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