/**
 * Created by jack on 16-7-13.
 */

import { QUERY_WEATHER_TODAY, RECEIVE_WEATHER_TODAY } from '../actions/WeatherToday'

export default function WeatherTodayReducer(state = {}, action) {
	switch (action.type) {
		case QUERY_WEATHER_TODAY:
			return { ...state, load: true, city: action.city }
		case RECEIVE_WEATHER_TODAY:
			return { ...state, load: false, detail: action.weatherToday}
		default:
			return state
	}
}
