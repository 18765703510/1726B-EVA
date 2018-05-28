
import React, { Component } from 'react'

import TodoInput from './TodoInput'
import TodoContent from './TodoContent'
import TodoInfo from './TodoInfo'

class TodoList extends Component {

    render () {
        return (
            <div>
                <TodoInput/>
                <TodoContent/>
                <TodoInfo/>
            </div>
        )
    }

}

export default TodoList