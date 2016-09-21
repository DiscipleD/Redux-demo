/**
 * Created by jack on 16-7-23.
 */

import angular from 'angular'

import './style.css'
import template from './template.html'
import controller from './controller'

const navBar = {
	bindings: {
		menus: '<'
	},
	template,
	controller
}

export default angular.module('NavBar', [])
	.component('navBar', navBar)
	.name
