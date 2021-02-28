

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
  let url0 = 'https://pokeapi.co/api/v2/pokemon?offset='
  let url1 = '&limit=20'
  dispatch({ type: FETCH_POKEMONS_REQUEST })

  fetch(`${url0}${counter}${url1}`)
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

export const addSelectedPokemon = (pokemon, url, url2) => (dispatch) => {
  Promise.all([
    fetch(url).then(res => res.json()),
    fetch(url2).then(res2 => res2.json())
  ]).then(([res, res2]) => {
    if (res2.gender_rate >= 0 && res2.gender_rate <=4){
      res2.gender = 'Male'
    } else {
      res2.gender = 'Female'
    }
    
    dispatch({
      type: ADD_SELECTED_POKEMON,
      payload: {
        pokemons: res,
        pokemonDescription: res2,
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