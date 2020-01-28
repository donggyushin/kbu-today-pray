import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'
import dialog from './dialog'
import loading from './loading'
import leftNavigationBar from './leftNavigationBar'

const intialState = {}

const allReducers = combineReducers({
    user,
    dialog,
    loading,
    leftNavigationBar
})

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, intialState, composeEnhancer(applyMiddleware(thunk)))

export default store