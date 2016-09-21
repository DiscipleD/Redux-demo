/**
 * Created by jack on 16-7-23.
 */

import angular from 'angular'

import template from './weather-forecast.html'
import controller from './WeatherForecastCtrl'

const WeatherForecast = {
	template,
	controller
}

export default angular.module('WeatherForecast', [])
	.component('weatherForecast', WeatherForecast)
	.name
