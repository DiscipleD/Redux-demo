/**
 * Created by jack on 16-7-5.
 */

import angular from 'angular'
import template from './todos.html'
import controller from './todos'

const todoContainer = {
	controller,
	template
}

export default angular.module('todoContainer', [])
	.component('todoContainer', todoContainer)
	.name
