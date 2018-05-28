
import React, { Component } from 'react'
import store from '../../store'
console.log(store.getState().todos)
class TodoInfo extends Component{
  constructor (props) {
        super(props) 
        this.state = {
            todos: store.getState().todos
        }
    }
	componentWillMount(){
		store.subscribe(()=>{
			 this.setState({
			 	todos:store.getState().todos
			 })
		})
	}
    getInfoFromTodos () {
        let { todos } = this.state
        
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
//      let info = this.getInfoFromTodos()
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
export default TodoInfo
