/**
 * Created by jack on 16-7-14.
 */

import angular from 'angular'

import Loading from './loading'
import QueryCity from './query-city'
import NavBar from './nav-bar'
import TodayWeatherBoard from './today-weather-board'
import ForecastWeatherBoard from './forecast-weather-board'

export default angular.module('Components', [Loading, QueryCity, NavBar, TodayWeatherBoard, ForecastWeatherBoard]).name
