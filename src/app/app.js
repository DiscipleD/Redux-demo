/**
 * Created by jack on 16-7-5.
 */

import angular from 'angular'

import components from '../components'
import todoContainer from './todos'

angular.module('todoApp', [components, todoContainer])
