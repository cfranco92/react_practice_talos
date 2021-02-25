export const SET_SHOW = 'SET_SHOW'

export const setShow = (oldState) => (dispatch) => {
  dispatch({
    type: SET_SHOW,
    payload: {
      oldState
    }
  })
}