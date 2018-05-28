


import { createStore } from 'redux'
import reducer from './reducer'
import calculator_ac from './calculator/actionCreator'
const store = createStore(reducer)

store.calculator_ac = calculator_ac

export default store