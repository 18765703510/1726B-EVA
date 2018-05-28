////
////
////import React, { Component } from 'react';
////import './index.scss'
////import store from '../../store'
////import actionCreator from '../../store/todolist/actionCreator'
//////无状态组件，顾名思义，组件只有属性，没有状态，只是一个函数，这个函数接收props参数就是组件的属性，返回一段jsx代码，描述就是组件的dom结构
////
////const TodoItem = ({data}) => {
////
////const onChange = (e) => {
////  actionCreator.changeFinished(data.id)
////}
////const removeTodo = actionCreator.removeTodo.bind(this, data.id)
////return (
////  <li className={"list-group-item " + (data.isFinished? 'finished' : '')}>
////    <input onChange = { onChange } type="checkbox" defaultChecked = {data.isFinished}/>
////    <span className="title">{ data.title }</span>
////    <button onClick = { removeTodo } type="button" className="close" ><i >&times;</i></button>
////  </li>
////)
////}
////
////class TodoContent extends Component {
////
////constructor (props) {
////  super(props)
////
////  this.state = {
////    //组件使用到store中的数据
////    todos: store.getState().todolist.todos
////  }
////}
////
////componentWillMount () {
////  //这个方法中传入的函数会在store数据变化的时候触发
////  store.subscribe(() => {
////    //通知组件去或者最新的状态
////    this.setState({ todos: store.getState().todolist.todos })
////  })
////}
////
////renderItems () {
////  
////  let { todos } = this.state
////  return todos.map(item => {
////    return <TodoItem key = {item.id} data={item} />
////  })
////}
////
//// 
////render() {  
////  return (
////    <ul className="list-group">         
////         { this.renderItems() }
////    </ul>
////  );
////}
////}
////
////export default TodoContent;
//
//
//import React, { Component } from 'react';
//import './index.scss'
////import store from '../../store'
////import actionCreator from '../../store/todolist/actionCreator'
//import GroupTodolist from '../../modules/group-todolist'
////无状态组件，顾名思义，组件只有属性，没有状态，只是一个函数，这个函数接收props参数就是组件的属性，返回一段jsx代码，描述就是组件的dom结构
//
//const TodoItem = ({data,removeTodo,changeFinished}) => {
//
////const onChange = (e) => {
////  actionCreator.changeFinished(data.id)
////}
////const removeTodo = actionCreator.removeTodo.bind(this, data.id)
//return (
//  <li className={"list-group-item " + (data.isFinished? 'finished' : '')}>
//    <input onChange = { changeFinished } type="checkbox" defaultChecked = {data.isFinished}/>
//    <span className="title">{ data.title }</span>
//    <button onClick = { removeTodo } type="button" className="close" ><i >&times;</i></button>
//  </li>
//)
//}
//
//class TodoContent extends Component {
//
////constructor (props) {
////  super(props)
////
////  this.state = {
////    //组件使用到store中的数据
////    todos: store.getState().todolist.todos
////  }
////}
//
////componentWillMount () {
////  //这个方法中传入的函数会在store数据变化的时候触发
////  store.subscribe(() => {
////    //通知组件去或者最新的状态
////    this.setState({ todos: store.getState().todolist.todos })
////  })
////}
//
//renderItems () {
//  
//  let { todos } = this.props
//  return todos.map(item => {
//  	 let changeFinished = this.props.changeFinished.bind(this, item.id)
//    let removeTodo = this.props.removeTodo.bind(this, item.id)
//    return <TodoItem 
//     changeFinished={changeFinished}  
//      removeTodo = {removeTodo}
//     key = {item.id} data={item} />
//  })
//}
//
// 
//render() {  
//  return (
//    <ul className="list-group">         
//         { this.renderItems() }
//    </ul>
//  );
//}
//}
//
//
//export default GroupTodolist(TodoContent);




import React, { Component } from 'react';
import './index.scss'

import GroupTodolist from '../../modules/group-todolist'

//无状态组件，顾名思义，组件只有属性，没有状态，只是一个函数，这个函数接收props参数就是组件的属性，返回一段jsx代码，描述就是组件的dom结构

const TodoItem = ({ data, removeTodo, changeFinished }) => {
  return (
    <li className={"list-group-item " + (data.isFinished? 'finished' : '')}  id={(data.isFinished? 'dased' : '')}>
      <input onChange = { changeFinished } type="checkbox" defaultChecked = {data.isFinished}/>
      <span className="title">{ data.title }</span>
      <button onClick = { removeTodo } type="button" className="close" ><i >&times;</i></button>
    </li>
  )
}

class TodoContent extends Component {

  renderItems () {
    
    let { todos } = this.props
    return todos.map(item => {
      
      let changeFinished = this.props.changeFinished.bind(this, item.id)
      let removeTodo = this.props.removeTodo.bind(this, item.id)
      
      return <TodoItem
      changeFinished = {changeFinished}
      removeTodo = {removeTodo}
      key = {item.id} data={item} />
    
    })
  }

 
  render() { 
    console.log(this) 
    return (
      <ul className="list-group">         
           { this.renderItems() }
      </ul>
    );
  }
}



export default GroupTodolist(TodoContent);


