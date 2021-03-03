import { API } from '../../utils'
export const FETCH_POKEMONS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POKEMONS_SUCCESS2 = 'FETCH_POSTS_SUCCESS2'
export const FETCH_POKEMONS_ERROR = 'FETCH_POSTS_ERROR'
export const FILTER_POKEMONS = 'FILTER_POKEMONS'
export const TRIGEER_FETCH = 'TRIGEER_FETCH'
export const ADD_SELECTED_POKEMON = 'ADD_SELECTED_POKEMON'
export const CLEAN_SELECTED_POKEMON = 'CLEAN_SELECTED_POKEMON'
export const SET_SHOW_TOAST = 'SET_SHOW_TOAST'


export const fetchPokemons = (counter) => (dispatch) => {
  const url = `${API}pokemon?offset=${counter}&limit=20`
  dispatch({ type: FETCH_POKEMONS_REQUEST })

  fetch(url)
    .then(res => res.json())
    .then(query => {
      dispatch({
        type: FETCH_POKEMONS_SUCCESS,
        payload: {
          pokemons: query
        }
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_POKEMONS_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const triggerFetch = (actualConter) => (dispatch) => {
  dispatch({
    type: TRIGEER_FETCH,
    payload: {
      counter: Number(actualConter) + 20
    }
  })
}

export const addSelectedPokemon = (pokemon, pokemonUrl, pokemonDescriptionUrl) => (dispatch) => {
  Promise.all([
    fetch(pokemonUrl).then(pokemonRes => pokemonRes.json()),
    fetch(pokemonDescriptionUrl).then(pokemonDescriptionRes => pokemonDescriptionRes.json())
  ]).then(([pokemonRes, pokemonDescriptionRes]) => {
    if (pokemonDescriptionRes.gender_rate >= 0 && pokemonDescriptionRes.gender_rate <=4){
      pokemonDescriptionRes.gender = 'Male'
    } else {
      pokemonDescriptionRes.gender = 'Female'
    }
    
    dispatch({
      type: ADD_SELECTED_POKEMON,
      payload: {
        pokemons: pokemonRes,
        pokemonDescription: pokemonDescriptionRes,
        pokemon: pokemon,
      }
    })
  }).catch(error => {
    dispatch({
      type: FETCH_POKEMONS_ERROR,
      payload: {
        error: error.toString()
      }
    })
  })
}

export const cleanSelectedPokemons = () => (dispatch) => {
  dispatch({
    type: CLEAN_SELECTED_POKEMON,
    payload: {
      pokemons: []
    }
  })
}

export const setShowToast = (showToast) => (dispatch) => {
  dispatch({
    type: SET_SHOW_TOAST,
    payload: {
      actualState: showToast
    }
  })
}
