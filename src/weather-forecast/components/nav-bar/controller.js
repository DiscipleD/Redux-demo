/**
 * Created by jack on 16-7-23.
 */

import { stateGo } from 'redux-ui-router'

export default class NavBarCtrl {
	constructor($ngRedux, $scope) {
		const routerAction = { stateGo }
		const unsubscribe = $ngRedux.connect(this.mapStateToThis, routerAction)(this)
		$scope.$on('$destroy', unsubscribe)
	}

	mapStateToThis(state) {
		return {
			router: state.router
		}
	}
}
