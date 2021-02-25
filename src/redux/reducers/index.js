import { combineReducers } from 'redux'
import pokemons from './pokemonsReducer'
import navBar from './navBarReducer'
import modalView from './modalViewReducer'

export default combineReducers({
  pokemons,
  navBar,
  modalView
})