/**
 * Created by jack on 16-7-14.
 */

import actions from '../../actions'

export default class QueryCity {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(null, actions)(this);
		$scope.$on('$destroy', unsubscribe);
	}
}
