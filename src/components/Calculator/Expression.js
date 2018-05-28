
import React, { Component } from 'react'

import store from '../../store'

class Expression extends Component {
    constructor (props) {
        super(props)

        this.state = {
            express: store.getState().calculator
        }
        this.changePrevValue = this.changeValue.bind(this, 'prevNumber')
        this.changeNowValue = this.changeValue.bind(this, 'nowNumber')
        this.compute = this.compute.bind(this)
    }
    componentWillMount () {
        store.subscribe(() => {
            this.setState({
                express: store.getState().calculator
            })
        })
    }
    changeValue (type, e) {
        let num = e.target.value
        store.calculator_ac.changeNumber(num,type)
    }
    compute () {
        store.calculator_ac.compute()
    }
    render () {
        let { prevNumber, nowNumber, operator } = this.state.express
        
        return (
            <div className = "expression">
                <input onChange = {this.changePrevValue} value = {prevNumber}  type="text" className="form-control"/>
                <button onClick = { this.compute } className="btn btn-default">{operator}</button>
                <input onChange = {this.changeNowValue} value = {nowNumber} type="text" className="form-control"/>
            </div>
        )
    }

}

export default Expression