import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonsActions';
import Charts from '../ChartTool';
import PokemonCard from '../PokemonCard';

const PokemonList = (props) => {
    let pokemonsList = [
        {
            name: 'Pikachu',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        },
        {
            name: 'Bulbasaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
    ]
    const [pokemons2] = useState(pokemonsList)

    useEffect(() => {
        props.fetchPokemons()
        console.log(props)
    }, [])
    // props.dispatch(fetchPokemons())

    return (
        <div>
            {props.pokemons.map((pokemon, index) => (
                <div
                    key={pokemon.name}>
                    <PokemonCard
                        name={pokemon.name}
                        imageIndex={index}
                    />
                </div>
            ))}

            <div>
                <Charts />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state', state.pokemons.pokemons)
    console.log('state', state)
    return {
        pokemons: state.pokemons.pokemonsArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => dispatch(fetchPokemons())
    }
}

// export default PokemonList
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (PokemonList)