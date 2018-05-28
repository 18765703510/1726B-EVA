
import _state from './state'
import {
    CHANGE_NUMBER,COMPUTE_RESULT
} from './const'
const reducer = ( state = _state, action ) => {
    let new_state = { ...state }

    switch ( action.type ) {

        case CHANGE_NUMBER:
           new_state = handler.changeNumberByType(new_state, action.numtype, action.num);
        break;

        case COMPUTE_RESULT:
            new_state = handler.computeNumber(new_state)
        break;

        default:break;
    }

    return new_state
}

export default reducer


const handler = {
    changeNumberByType (state, type, num) {//根据类型更改数据
        state[type] = num;
        return state
    },
    computeNumber (state) {
        if ( state.result !== 0 ) {
            //判断一下第一个数有没有变？判断第一个数如果不等于结果-第二个数，说明变了
            if ( state.prevNumber*1 === state.result - state.nowNumber ) {
                state.prevNumber = state.result 
            }                     
        }     
        state.result = eval('('+state.prevNumber + state.operator + state.nowNumber+')')
        console.log(state)
        return state
    }
}
