
import React, { Component } from 'react'
import './index.scss'
import Expression from './Expression'
import Result from './Result'

class Calculator extends Component {

    render () {
        return (
            <div className="calculator">
               <Expression/> = <Result/>
            </div>
        )
    }

}

export default Calculator