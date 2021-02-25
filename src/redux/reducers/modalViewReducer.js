import { SET_SHOW } from '../actions/modalViewActions'

const initialState = {
  showWindow: false
}

function modalView(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW:
      return {
        ...state,
        showWindow: !state.showWindow
      }

    default:
      return state
  }
}

export default modalView