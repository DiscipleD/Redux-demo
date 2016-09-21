/**
 * Created by jack on 16-7-14.
 */

import actions from '../../redux/actions'

export default class QueryCity {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(null, actions)(this)
		$scope.$on('$destroy', unsubscribe)
	}

	queryWeather(cityName) {
		this.fetchWeatherToday(cityName)
		this.fetchWeatherForecast(cityName)
	}
}
