
import React, { Component } from 'react'

import store from '../../store'

class Result extends Component {
    constructor (props) {
        super(props)

        this.state = {
            result: store.getState().calculator.result
        }
    }

    componentWillMount () {
        store.subscribe(() => {
            this.setState({
                result: store.getState().calculator.result
            })
        })
    }

    render () {
        let { result } = this.state
        return (
            <div>
               <button className="btn btn-default">{result}</button>
            </div>
        )
    }

}

export default Result