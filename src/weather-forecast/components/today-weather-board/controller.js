/**
 * Created by jack on 16-7-14.
 */

import actions from '../../actions'

export default class TodayWeatherBoardCtrl {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);
		$scope.$on('$destroy', unsubscribe);
	}

	mapStateToThis(state) {
		return {
			weatherToday: state.weatherToday
		};
	}
}
