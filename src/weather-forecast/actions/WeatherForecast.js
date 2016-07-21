/**
 * Created by jack on 16-7-13.
 */

import CONFIG from '../config'

export const QUERY_WEATHER_FORECAST = 'QUERY_WEATHER_FORECAST'
export const RECEIVE_WEATHER_FORECAST = 'RECEIVE_WEATHER_FORECAST'

const queryWeatherForecast = city => ({
	type: QUERY_WEATHER_FORECAST,
	city
})

const receiveWeatherForecast = weatherForecast => ({
	type: RECEIVE_WEATHER_FORECAST,
	weatherForecast
})

export function fetchWeatherForecast(city) {
	return dispatch => {
		dispatch(queryWeatherForecast(city))

		return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=zh_cn&units=metric&APPID=${CONFIG.APPID}`)
			.then(response => response.json())
			.then(data => dispatch(receiveWeatherForecast(data)))
	}
}
