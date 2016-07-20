/**
 * Created by jack on 16-7-13.
 */

import angular from 'angular'
import ngRedux from 'ng-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import './assets/main.css'
import WeatherForecastReducer from './reducers'
import Components from './components'

const loggerMiddleware = createLogger()

angular.module('WeatherForecastApp', [ngRedux, Components])
	.config($ngReduxProvider => {
		$ngReduxProvider.createStoreWith(
			WeatherForecastReducer,
			[thunkMiddleware, loggerMiddleware]
		)
	})
