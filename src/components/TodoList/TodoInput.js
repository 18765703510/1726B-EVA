

import React, { Component } from 'react';
import actionCreator from '../../store/todolist/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class TodoInput extends Component {
    constructor (props) {
        super(props)

        this.handleKeyUp = this.handleKeyUp.bind(this)
    }
    handleKeyUp (e) {
        if ( e.keyCode === 13 ) {
        	console.log(this.el.value)
            if ( !this.el.value.trim() ) return false;
            //回车了
            //根据用户的操作，调用了actionCreator的方法
            //actionCreator.addNewTodo( this.el.value )
            this.props.addNewTodo(this.el.value)
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
let mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch)
}

export default connect(state=>state, mapDispatchToProps)(TodoInput)
