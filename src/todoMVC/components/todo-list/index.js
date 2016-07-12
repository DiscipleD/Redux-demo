/**
 * Created by jack on 16-7-5.
 */

import angular from 'angular'
import template from './template.html'

const TodoList = {
	bindings: {
		todoList: '<',
		toggleTodoFn: '&'
	},
	template
}

export default angular.module('TodoList', [])
	.component('todoList', TodoList)
	.name
