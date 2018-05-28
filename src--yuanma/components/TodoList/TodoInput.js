

import React, { Component } from 'react';
import actionCreator from '../../store/todolist/actionCreator'


class TodoInput extends Component {
    constructor (props) {
        super(props)

        this.handleKeyUp = this.handleKeyUp.bind(this)
    }
    handleKeyUp (e) {
        if ( e.keyCode === 13 ) {
            if ( !this.el.value.trim() ) return false;
            //回车了
            //根据用户的操作，调用了actionCreator的方法
            actionCreator.addNewTodo( this.el.value )
            this.el.value = ''
        }
    }
    render() {
        return (
            <div className="form-group">
                <input ref = { el => this.el = el } onKeyUp = { this.handleKeyUp } type="text" className="form-control"/>
            </div>
        );
    }
    componentDidMount () {
        this.el.focus()
    }
}

export default TodoInput;
