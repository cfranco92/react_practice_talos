import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({
    name: 'PokéApp_By_Cristian',
    realtime: true,
    trace: true,
    traceLimit: 20
  })

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(logger, thunk)
    )
)

export default store