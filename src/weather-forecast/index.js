/**
 * Created by jack on 16-7-13.
 */

import angular from 'angular'
import ngRedux from 'ng-redux'
import ngReduxUiRouter from 'redux-ui-router'

import './assets/main.css'
import { current, forecast } from './Router'
import Containers from './containers'
import Components from './components'
import configStore from './redux'

angular.module('WeatherForecastApp', [ngReduxUiRouter, ngRedux, Containers, Components])
	.config(($urlRouterProvider, $stateProvider) => {
		$urlRouterProvider
			.otherwise('/current')

		$stateProvider
			.state('current', current)
			.state('forecast', forecast)
	})
	.config(configStore)
