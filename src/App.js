import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import NavigationBar from './components/NavigationBar'
import PokemonList from './components/PokemonList';
import Items from './components/Items'
import Home from './components/Home'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationBar />
        <Route path='/home' component={Home} />
        <Route path='/' exact component={PokemonList} />
        <Route path='/items' render={Items} />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
