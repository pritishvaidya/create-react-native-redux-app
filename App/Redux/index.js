import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import { seamlessImmutableReconciler, seamlessImmutableTransformer } from 'redux-persist-seamless-immutable'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: seamlessImmutableReconciler,
    transforms: [seamlessImmutableTransformer]
}

const RootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    sample: require('./SampleRedux').reducer,
})

const PersistedReducer = persistReducer(persistConfig, RootReducer)

export default PersistedReducer
