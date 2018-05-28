
import {
    ADD_NEW_TODO,
    CHANGE_FINISHED,
    DELETE_TODO
} from './const'
//import store from '../index'
const actionCreator = {
    addNewTodo ( title ) {
        //创建好了action，准备交给store
        let action = {
            type: ADD_NEW_TODO,
            title
        }
        //将action发送给store
//      store.dispatch(action)
           return action
    },
    changeFinished ( id ) {
        let action = { type: CHANGE_FINISHED, id }
        return action
    },
    removeTodo ( id ) {
        let action = { type: DELETE_TODO, id }
        return action
    }
}

export default actionCreator