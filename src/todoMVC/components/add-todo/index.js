/**
 * Created by jack on 16-7-5.
 */

import angular from 'angular'
import template from './template.html'
import controller from './controller'

const addTodo = {
	bindings: {
		addTodoFn: '&'
	},
	controller,
	template
}

export default angular.module('AddTodo', [])
	.component('addTodo', addTodo)
	.name
