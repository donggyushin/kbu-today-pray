import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'
import dialog from './dialog'
import loading from './loading'
import leftNavigationBar from './leftNavigationBar'
import location from './location'
import workspace from './workspace'
import todayPrayForPost from './todayPrayForPost'
import datepicker from './datepicker'

const intialState = {}

const allReducers = combineReducers({
    user,
    dialog,
    loading,
    leftNavigationBar,
    location,
    workspace,
    todayPrayForPost,
    datepicker
})

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, intialState, composeEnhancer(applyMiddleware(thunk)))

export default store