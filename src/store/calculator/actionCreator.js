
import { CHANGE_NUMBER, COMPUTE_RESULT } from './const'
//import store from '../index'
const actionCreator = {
    changeNumber (num, numtype) {
        let action = { type: CHANGE_NUMBER, num, numtype }
        //store.dispatch(action)
        return action
    },
    compute () {
        let action = { type: COMPUTE_RESULT }
        //store.dispatch(action)
         return action
    }
}

export default actionCreator