/**
 * Created by jack on 16-7-13.
 */

import CONFIG from '../../config'

export const QUERY_WEATHER_TODAY = 'QUERY_WEATHER_TODAY'
export const RECEIVE_WEATHER_TODAY = 'RECEIVE_WEATHER_TODAY'

const queryWeatherToday = city => ({
	type: QUERY_WEATHER_TODAY,
	city
})

const receiveWeatherToday = weatherToday => ({
	type: RECEIVE_WEATHER_TODAY,
	weatherToday
})

export function fetchWeatherToday(city) {
	return dispatch => {
		dispatch(queryWeatherToday(city))
console.log(CONFIG)
		return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=zh_cn&units=metric&APPID=${CONFIG.APP_ID}`)
			.then(response => response.json())
			.then(data => dispatch(receiveWeatherToday(data)))
	}
}
