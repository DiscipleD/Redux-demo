/**
 * Created by jack on 16-7-14.
 */

import angular from 'angular'

import './style.css'
import template from './template.html'
import controller from './controller'

const ForecastWeatherBoard = {
	controller,
	template
}

export default angular.module('ForecastWeatherBoard', [])
	.component('forecastWeatherBoard', ForecastWeatherBoard)
	.name
