/**
 * Created by jack on 16-7-21.
 */

import angular from 'angular'

import './style.css'
import template from './template.html'

const loadingComponentSetting = {
	template
}

export default angular.module('loading', [])
	.component('loading', loadingComponentSetting)
	.name
