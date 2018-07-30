import React, { Component } from 'react'

// Connection to redux state:
import { connect } from 'react-redux'

// Thunk:
import { addFruitRequest } from '../actions/fruits'

class FruitForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: 0
        }

        this.updateState = this.updateState.bind(this)
        this.submit = this.submit.bind(this)

    }

    updateState(e) {
        e.target.name == 'rating' ? this.setState({[e.target.name]: Number(e.target.value)}) : this.setState({[e.target.name]: e.target.value})
    }

    submit(e) {
        e.preventDefault()
        const fruit = this.state
    
        this.props.dispatch(addFruitRequest(fruit))
    }

    render() {
        return (
            <form>
                <label>Name of Fruit:</label>
                <input type="text" name="name" onChange={(e) => this.updateState(e)} className="input" />

                <label>Rating</label>
                <input type="text" name="rating" onChange={(e) => this.updateState(e)} className="input" />

                <button className="button" onClick={(e) => this.submit(e)}>Submit</button>
            </form>
        )
    }
}

export default connect()(FruitForm)