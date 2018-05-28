
import {
    ADD_NEW_TODO,
    CHANGE_FINISHED,
    DELETE_TODO
} from './const'
import store from '../index'
const actionCreator = {
    addNewTodo ( title ) {
        //创建好了action，准备交给store
        let action = {
            type: ADD_NEW_TODO,
            title
        }
        //将action发送给store
        store.dispatch(action)
    },
    changeFinished ( id ) {
        let action = { type: CHANGE_FINISHED, id }
        store.dispatch(action)
    },
    removeTodo ( id ) {
        let action = { type: DELETE_TODO, id }
        store.dispatch(action)
    }
}

export default actionCreator