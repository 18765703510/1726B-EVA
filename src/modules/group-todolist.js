

import actionCreator from '../store/todolist/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

let GroupTodolist = connect(state => state.todolist, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})

export default GroupTodolist