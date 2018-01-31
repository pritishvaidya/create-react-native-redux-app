// Reducers
import PersistReducer from './index'
import RootSaga from '../Sagas'

// Redux
import { createStore, applyMiddleware} from 'redux'

// Redux Middlewares
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware, logger)

export default function configureStore() {
    let store = createStore(PersistReducer, middleware)

    // Run the saga
    sagaMiddleware.run(RootSaga)

    let persistor = persistStore(store)
    return { persistor, store }
}
