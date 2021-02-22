import React, { useState } from 'react'
import Charts from '../ChartTool';
import PokemonCard from '../PokemonCard';

const PokemonList = (props) => {
    let pokemonsList = [
        {
            name: 'Pikachu',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe9Q76P0YAKEPuI0HWY9oa8k4pKVHITfvG2FRP0mkTwnpffrKuWVsWsTHyVg&usqp=CAc'
        },
        {
            name: 'Bulbasaur',
            image: 'https://alchetron.com/cdn/bulbasaur-6ff8e197-3cf8-4793-8b3a-6e65f8d899f-resize-750.png'
        }

    ]
    const [pokemons] = useState(pokemonsList)

    return (
        <div>
            {pokemons.map((pokemon) => (
                <div
                    key={pokemon.name}>
                    <PokemonCard
                        name={pokemon.name}
                        image={pokemon.image}
                    />
                </div>
            ))}

            <div>
                <Charts />
            </div>
        </div>
    )
}

export default PokemonList