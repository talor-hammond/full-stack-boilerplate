import React, { Component } from 'react'

// Components:
import Fruits from './Fruits'
import FruitForm from './FruitForm'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Fruits />
                <FruitForm />
            </React.Fragment>
        )
    }

}

export default App
