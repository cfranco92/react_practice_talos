import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonsActions';
import { Row } from 'react-bootstrap';
import Charts from '../ChartTool';
import PokemonCard from '../PokemonCard';

const PokemonList = ({ pokemons, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  return (
    <div>
      <Row>
        {pokemons.map((pokemon, index) => (
          <div key={pokemon.name}>
            <PokemonCard
              name={pokemon.name}
              imageIndex={index}
            />
          </div>
        ))}
      </Row>
      <div>
        <Charts />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.pokemonsArray
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