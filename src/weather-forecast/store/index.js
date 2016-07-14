/**
 * Created by jack on 16-7-13.
 */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import WeatherForecastReducer from '../reducers'
import actions from '../actions'

const loggerMiddleware = createLogger()

const store = createStore(
	WeatherForecastReducer,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	)
)

store.dispatch(actions.fetchWeatherToday('shanghai'))

export default store
