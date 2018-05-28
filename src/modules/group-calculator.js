
import { connect } from 'react-redux'
import actionCreator from '../store/calculator/actionCreator'
import { bindActionCreators } from 'redux'


const GroupCalculator = connect(state=>state.calculator, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})

export default GroupCalculator