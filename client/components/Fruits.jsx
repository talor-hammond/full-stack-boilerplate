import React from 'react'

import { connect } from 'react-redux'

const Fruits = (props) => {

    console.log(props)

    return (
        <React.Fragment>
            <h1>Hi</h1>
            {
                props.fruits.map(fruit => {
                    <h1>{fruit.name}</h1>
                })
            }
        </React.Fragment>
    )

}

const mapStateToProps = ({fruits}) => {
    return { fruits }
}

export default connect(mapStateToProps)(Fruits)