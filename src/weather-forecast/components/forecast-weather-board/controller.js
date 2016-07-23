/**
 * Created by jack on 16-7-14.
 */

export default class ForecastWeatherBoardCtrl {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(this.mapStateToThis)(this)
		$scope.$on('$destroy', unsubscribe)
	}

	mapStateToThis(state) {
		return {
			weatherForecast: state.weatherForecast
		}
	}
}
