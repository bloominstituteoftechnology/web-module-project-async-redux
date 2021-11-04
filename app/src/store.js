import movieReducers from './reducers/movieReducers';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
    movieReducers
})

const persistConfig = {
    key: 'root',
    storage: storage
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

export default () => {
    let persistor = persistStore(store)
    return { store, persistor }
  }