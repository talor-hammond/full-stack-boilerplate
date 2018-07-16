import React, { Component } from 'react'

// Connection to redux state:
import { connect } from 'react-redux'

// Actions / api / thunk:
import { receiveFruits } from '../api/fruits'

class Fruits extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(receiveFruits())
    }

    render() {
        // Pulling fruits from props
        const { fruits } = this.props

        return (
            <React.Fragment>
                <h1>Hi</h1>
                {
                    fruits.map((fruit, i) => {
                        return <h1 key={i}>{fruit.name}</h1>
                    })
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({fruits}) => ({
    fruits
})

// function mapStateToProps(state) {
//     return {
//         fruits: state.fruits
//     }
// }

export default connect(mapStateToProps)(Fruits)