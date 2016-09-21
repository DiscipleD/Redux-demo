/**
 * Created by jack on 16-9-13.
 */

import angular from 'angular'

import WeatherForecast from './WeatherForecast'
import QueryCity from './query-city'
import NavBar from './nav-bar'
import TodayWeatherBoard from './today-weather-board'
import ForecastWeatherBoard from './forecast-weather-board'

export default angular
	.module('Containers', [
		WeatherForecast,
		QueryCity,
		NavBar,
		TodayWeatherBoard,
		ForecastWeatherBoard
	])
	.name
