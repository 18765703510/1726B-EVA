import React ,{Component} from 'react';
import '../../stylesheets/item.css';
import store from '../../store'
import actionCreator from '../../store/actionCreator'
console.log(store)
const TodoItem=({data})=>{
	const onChange=(e)=>{
		actionCreator.changeFinished(data.id)
		//console.log(e.target.checked)
		console.log(data.id)
	}
	const removeTodo = actionCreator.removeTodo.bind(this, data.id)
	return (
       <li className={"list-group-item " + (data.isFinished? 'finished' : '')} 
       id={(data.isFinished? 'dased' : '')}>
         <input onChange = { onChange } type="checkbox" defaultChecked = {data.isFinished}/>
         <span className="title">{ data.title }</span>
           <button onClick = { removeTodo } type="button" className="close" ><i >&times;</i></button>
      </li>
	)
	
}
class TodoContent extends Component {
	 constructor (props){
	 	super(props)
	 	this.state={
	 		todos:store.getState().todos
	 		
	 	}
	 	//console.log(store.getState().todos)
	 }
	 componentWillMount(){
	 	store.subscribe(()=>{
	 		this.setState({todos:store.getState().todos})
	 	})
	 }
	renderItems () {
    
    let { todos } = this.state
    return todos.map(item => {
      return <TodoItem key = {item.id} data={item} />
    })
  }
	 render (){
	 	return (
	 		<ul className="list-group">
	 		  { this.renderItems() }
	 		</ul>
	 	)
	 }
}
export default TodoContent
