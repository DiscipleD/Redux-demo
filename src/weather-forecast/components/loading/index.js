/**
 * Created by jack on 16-7-21.
 */

import angular from 'angular';

const loadingComponentSetting = {
	template: `<div>loading...</div>`
}

export default angular.module('loading', [])
	.component('loading', loadingComponentSetting)
	.name
