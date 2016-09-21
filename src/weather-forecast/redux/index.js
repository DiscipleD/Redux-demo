/**
 * Created by jack on 16-9-13.
 */

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import WeatherForecastReducer from './reducers'

const loggerMiddleware = createLogger()

const configStore = $ngReduxProvider => {
	$ngReduxProvider.createStoreWith(
		WeatherForecastReducer,
		[thunkMiddleware, loggerMiddleware, 'ngUiRouterMiddleware']
	)
}

export default configStore;
