/**
 * Created by jack on 16-7-14.
 */

import angular from 'angular'

import './style.css'
import template from './template.html'
import controller from './controller'

const queryCityComponent = {
	template,
	controller
}

export default angular.module('QueryCity', [])
	.component('queryCity', queryCityComponent)
	.name
