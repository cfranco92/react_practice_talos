import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  TRIGEER_FETCH,
  FETCH_POKEMONS_ERROR,
  ADD_SELECTED_POKEMON,
  CLEAN_SELECTED_POKEMON,
  SET_SHOW_TOAST
} from '../actions/pokemonsActions'

const initialState = {
  pokemonsArray: [],
  isFetching: false,
  error: null,
  nextQuery: null,
  previousQuery: null,
  queryCounter: 0,
  selectedPokemons: [],
  showToast: false
}

function pokemons(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        previosQuery: action.payload.pokemons.previous,
        nextQuery: action.payload.pokemons.next,
        pokemonsArray: [
          ...state.pokemonsArray,
          ...action.payload.pokemons.results,
        ],
      }

    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    case TRIGEER_FETCH:
      return {
        ...state,
        queryCounter: action.payload.counter
      }

    case ADD_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemons: [
          ...state.selectedPokemons,
          {
            ...action.payload.pokemons,
            ...action.payload.pokemon,
            ...action.payload.pokemonDescription
          },
        ]
      }

    case CLEAN_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemons: [
          ...action.payload.pokemons
        ]
      }

    case SET_SHOW_TOAST:
      return {
        ...state,
        showToast: !(state.showToast)
      }

    default:
      return state
  }
}

export default pokemons