import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonsActions';
import { Row } from 'react-bootstrap';
import Charts from '../ChartTool';
import PokemonCard from '../PokemonCard';

const PokemonList = ({ pokemonsQuery, fetchPokemons, navBarState }) => {

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  return (
    <div>
      <p>{navBarState.search}</p>
      <Row>
        {pokemonsQuery.map((pokemon, index) => {
          if (pokemon.name.toLowerCase().includes(navBarState.search)) {
            return (
              <div key={pokemon.name}>
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
    navBarState: state.navBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)