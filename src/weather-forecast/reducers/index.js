/**
 * Created by jack on 16-7-13.
 */

import { combineReducers } from 'redux'
import { router } from 'redux-ui-router'
import weatherToday from './WeatherToday'
import weatherForecast from './WeatherForecast'

export default combineReducers({
	weatherToday,
	weatherForecast,
	router
})
