/**
 * Created by jack on 16-7-4.
 */

import { createStore } from 'redux'
import todoApp from '../reducers'
import actions from '../actions'

let store = createStore(todoApp)

// Log the initial state
console.log('init store', store.getState())

export default store
