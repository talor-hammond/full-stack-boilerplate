import React, { Component } from 'react'

import { connect } from 'react-redux'

class Fruits extends Component {
    componentDidMount() {
        console.log('I should grab some fruits now?')
    }

    render() {
        // Pulling fruits from props
        const { fruits } = this.props
        console.log(fruits)

        return (
            <React.Fragment>
                <h1>Hi</h1>
                {
                    fruits.map(fruit => {
                        <h1>{fruit.name}</h1>
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
//         rats: state.rats
//     }
// }

export default connect(mapStateToProps)(Fruits)