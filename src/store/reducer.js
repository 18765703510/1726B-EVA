
//import { combineReducers } from 'redux'
////todolist 的reducer
//import todolist from './todolist/reducer'
////calculator的reducer
//import calculator from './calculator/reducer'
////真正的reducer
//const reducer = combineReducers({
//  todolist, calculator
//})
//
//export default reducer
import { combineReducers } from 'redux'

import todolist from './todolist/reducer'

import calculator from './calculator/reducer'

const reducer = combineReducers({
    todolist, calculator
})
export default reducer
