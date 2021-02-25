

export const FETCH_POKEMONS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POKEMONS_SUCCESS2 = 'FETCH_POSTS_SUCCESS2'
export const FETCH_POKEMONS_ERROR = 'FETCH_POSTS_ERROR'
export const FILTER_POKEMONS = 'FILTER_POKEMONS'
export const TRIGEER_FETCH = 'TRIGEER_FETCH'
export const ADD_SELECTED_POKEMON = 'ADD_SELECTED_POKEMON'


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

export const addSelectedPokemon = (pokemon, url) => (dispatch) => {
  
    fetch(url)
      .then(res => res.json())
      .then(query => {
        dispatch({
          type: ADD_SELECTED_POKEMON,
          payload: {
            pokemons: query,
            pokemon: pokemon
          }
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_SELECTED_POKEMON,
          payload: {
            error: error.toString()
          }
        })
      })
}