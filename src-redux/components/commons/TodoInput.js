import React ,{Component} from 'react';
//import '../../stylesheets/item.css';
import actionCreator from '../../store/actionCreator'

 class TodoInput extends Component {
    constructor (props) {
        super(props)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }
    handleKeyUp(e){
    	if(e.keyCode===13){
    		actionCreator.addNewTodo( this.el.value )
    		  this.el.value = ''
    		console.log(this.el.value)
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