
import state from './state'
import {
    ADD_NEW_TODO, CHANGE_FINISHED, DELETE_TODO
} from './const'
//当store接收到action的时候，reducer就能接收到新的action
const reducer = ( previousState = state, action ) => {
    let new_state = Object.assign({}, previousState)

    switch ( action.type ) {
        case ADD_NEW_TODO:
            //添加一个todo
            new_state.todos.push({ id: handler.getBiggerId(new_state.todos), title: action.title, isFinished: false })
        break;

        case CHANGE_FINISHED:
            //更改某一条数据的isFinished
            new_state.todos = handler.changeFinished.bind(new_state.todos,action.id)()
        break;

        case DELETE_TODO:
            new_state.todos = handler.removeTodo.bind(new_state.todos, action.id)()
        break;

        default: break;
    }
    //reducer是一个纯函数，尽量只放入操作数据的动作，而且在reducer中不能放入返回值不确定的东西，比如Date.now()，Math.random（）

    localStorage.todos = JSON.stringify(new_state.todos)

    return new_state
}
export default reducer

const handler = {
    getBiggerId (todos) {//获取一个数组中最大的id
        let arr = todos.slice()
        if ( !arr.length ) return 1;

        return arr.sort((a,b) => {
            return b.id - a.id
        })[0].id + 1 
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