//
//
//import React, { Component } from 'react'
//import store from '../../store'
//class TodoInfo extends Component {
//  constructor (props) {
//      super(props) 
//      this.state = {
//          todos: store.getState().todolist.todos
//      }
//  }
//
//  componentWillMount () {
//      store.subscribe(() => {
//          this.setState({
//              todos: store.getState().todolist.todos
//          })
//      })
//  }
//
//  getInfoFromTodos () {
//      let { todos } = this.state
//      
//      let info = { num: 0, finishedNum: 0, unfinishedNum: 0 }
//      
//      if ( !todos.length ) return info;
//      info.num = todos.length
//      todos.forEach(item => {
//          if ( item.isFinished ) {
//              info.finishedNum++
//          }else {
//              info.unfinishedNum++
//          }
//      });
//      return info;
//  }
//
//  render () {
//      let info = this.getInfoFromTodos()
//      return (
//          <div className="alert alert-info">
//              总共有 <label className="label label-primary">{info.num}</label> 条;
//              其中 <label className="label label-primary">{info.finishedNum}</label> 条完成事项;
//              <label className="label label-primary">{info.unfinishedNum}</label> 条未完成事项;
//          </div>
//      )
//  }
//
//}



import React, { Component } from 'react'
//import store from '../../store'
import { connect } from 'react-redux'
class TodoInfo extends Component {
    getInfoFromTodos () {
    	console.log(this)
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
     componentWillReceiveProps () {
        console.log('componentWillReceiveProps')
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

let TodoInfoContainer = connect(mapStateToProps)(TodoInfo)
export default TodoInfoContainer