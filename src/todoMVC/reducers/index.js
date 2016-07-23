/**
 * Created by jack on 16-7-4.
 */
import { combineReducers } from 'redux'
import { todos } from './todos'

// main reducer
const todoApp = combineReducers({
	todos // 等价于 todos: todos(state.todos, action)
})

export default todoApp
