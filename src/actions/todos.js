/**
 * Created by jack on 16-7-4.
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}
