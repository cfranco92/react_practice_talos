import React, { Component } from 'react'
import PokemonCard from './components/PokemonCard';

class App extends Component {
  state = {
    pokemons: [
      {
        name: 'Pikachu',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe9Q76P0YAKEPuI0HWY9oa8k4pKVHITfvG2FRP0mkTwnpffrKuWVsWsTHyVg&usqp=CAc'
      },
      {
        name: 'Bulbasaur',
        image: 'https://alchetron.com/cdn/bulbasaur-6ff8e197-3cf8-4793-8b3a-6e65f8d899f-resize-750.png'
      }

    ],
    selectedPokemon: {}
  }

  select = (selectedPokemon) => {
    this.setState({
      selectedPokemon
    })
    alert(`${selectedPokemon.name} selected`)
  }

  render() {
    const { pokemons } = this.state
    return (
      <div>
        {pokemons.map((pokemon) => (
          <div 
            onClick={this.select.bind(this, pokemon)}
            key={pokemon.name}>
            <PokemonCard 
              name={pokemon.name}
              image={pokemon.image}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default App;
