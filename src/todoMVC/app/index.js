/**
 * Created by jack on 16-7-5.
 */

import angular from 'angular'
import template from './todoMVC.html'
import controller from './todoMVC'

const todoContainer = {
	controller,
	template
}

export default angular.module('todoContainer', [])
	.component('todoContainer', todoContainer)
	.name
