

import React, { Component } from 'react'
//import store from '../../store'
import { connect } from 'react-redux'
class TodoInfo extends Component {
    getInfoFromTodos () {
        let { todos } = this.props
        
        let info = { num: 0, finishedNum: 0, unfinishedNum: 0 }
        
        if ( !todos.length ) return info;
        info.num = todos.length
        todos.forEach(item => {
            if ( item.isFinished ) {
                info.finishedNum++
            }else {
                info.unfinishedNum++
            }
        });
        return info;
    }

    render () {
        let info = this.getInfoFromTodos()
        return (
            <div className="alert alert-info">
                总共有 <label className="label label-primary">{info.num}</label> 条;
                其中 <label className="label label-primary">{info.finishedNum}</label> 条完成事项;
                <label className="label label-primary">{info.unfinishedNum}</label> 条未完成事项;
            </div>
        )
    }

}
let mapStateToProps=(state)=>{
	return state.todolist
}
let TodoInfoContainer=connect(mapStateToProps)(TodoInfo)

export default TodoInfoContainer