/**
 * Created by jack on 16-7-5.
 */

import store from '../../store'

import actions from '../../actions'

export default class TodosContainController {

	$onInit() {
		this.unsubscribe = store.subscribe(() => {
				console.log(store.getState())
				this.todos = store.getState().todos
		})
	}

	addTodoItem(text) {
		store.dispatch(actions.addTodo(text))
	}

	toggleTodoItem(index) {
		store.dispatch(actions.toggleTodo(index))
	}

	$onDistory() {
		this.unsubscribe()
	}
}
