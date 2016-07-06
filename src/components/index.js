/**
 * Created by jack on 16-7-5.
 */

import angular from 'angular'

import addTodo from './add-todo'
import todoList from './todo-list'

export default angular.module('components', [addTodo, todoList])
	.name
