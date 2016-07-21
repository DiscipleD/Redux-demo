/**
 * Created by jack on 16-7-21.
 */

import { QUERY_WEATHER_FORECAST, RECEIVE_WEATHER_FORECAST } from '../actions/WeatherForecast'

export default function WeatherForecastReducer(state = {}, action) {
	switch (action.type) {
		case QUERY_WEATHER_FORECAST:
			return { load: true, city: action.city }
		case RECEIVE_WEATHER_FORECAST:
			return { ...state, load: false, detail: action.weatherForecast}
		default:
			return state
	}
}

