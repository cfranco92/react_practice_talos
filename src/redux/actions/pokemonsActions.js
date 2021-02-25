

export const FETCH_POKEMONS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POKEMONS_ERROR = 'FETCH_POSTS_ERROR'
export const FILTER_POKEMONS = 'FILTER_POKEMONS'

export const fetchPokemons = () => (dispatch) => {

  dispatch({ type: FETCH_POKEMONS_REQUEST })

  fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then(res => res.json())
    .then(query => {
      dispatch({
        type: FETCH_POKEMONS_SUCCESS,
        payload: {
          pokemons: query.results
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
