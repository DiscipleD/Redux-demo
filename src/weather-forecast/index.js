/**
 * Created by jack on 16-7-13.
 */

import angular from 'angular'
import ngRedux from 'ng-redux'
import ngReduxUiRouter from 'redux-ui-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import './assets/main.css'
import { current, forecast } from './Router'
import App from './app/app'
import WeatherForecastReducer from './reducers'
import Components from './components'

const loggerMiddleware = createLogger()

angular.module('WeatherForecastApp', [ngReduxUiRouter, ngRedux, App, Components])
	.config(($urlRouterProvider, $stateProvider) => {
		$urlRouterProvider
			.otherwise('/current')

		$stateProvider
			.state('current', current)
			.state('forecast', forecast)
	})
	.config($ngReduxProvider => {
		$ngReduxProvider.createStoreWith(
			WeatherForecastReducer,
			[thunkMiddleware, loggerMiddleware, 'ngUiRouterMiddleware']
		)
	})
