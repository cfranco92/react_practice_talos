import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import PokemonList from './components/PokemonList';
import Items from './components/Items'

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Route path='/' exact component={PokemonList}/>
      <Route path='/items' render={Items}/>
    </BrowserRouter>
  )
}

export default App;
