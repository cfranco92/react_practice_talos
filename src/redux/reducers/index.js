import { combineReducers } from 'redux'
import pokemons from './pokemonsReducer'
import navBar from './navBarReducer'

export default combineReducers({
  pokemons,
  navBar
})