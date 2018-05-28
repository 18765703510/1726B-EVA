import state from './state'
import {
    ADD_NEW_TODO, CHANGE_FINISHED, DELETE_TODO
} from './const'
const reducer = ( previousState = state, action ) => {
	console.log(previousState)
	//let  new_state={...previousState}
	let new_state = Object.assign({}, previousState)
	//return previousState
	//return 1
	console.log(new_state.todos)
	console.log(action.type)
	console.log(action)
	 switch(action.type){
	 	 case ADD_NEW_TODO:
	 	  new_state.todos.push({id:handler.getBiggerId(new_state.todos),title:action.title})
	 	break;
	 	case CHANGE_FINISHED:
	 	    new_state.todos=handler.changeFinished.bind(new_state.todos,action.id)()
	 	break;
	 	case DELETE_TODO:
            new_state.todos = handler.removeTodo.bind(new_state.todos, action.id)()
        break;

	 	default:break;
	 }
	return new_state
}
export default reducer
const handler={
	getBiggerId(todos){
		let arr=todos.slice()
		if(!arr.length) return 1;
		return arr.sort((a,b)=>{
			return b.id-a.id
		})[0].id+1
	},
	  changeFinished (id) {//更改isFinished
       let arr = this.slice()
       for (let i = 0; i < arr.length; i++) {
           let item = arr[i]
            if ( item.id === id ) { 
                item.isFinished = !item.isFinished
                break;
            }
       }
       return arr
    },
     removeTodo (id) { //删除一个todo
        return this.filter(item => {
            if ( item.id === id ) return false;
            return true;
        })     
    }
	
}
