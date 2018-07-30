import request from 'superagent'

const fruitUrl = '/api/v1/fruits'

// Strings:
export const RECEIVE_FRUITS = 'RECEIVE_FRUITS'
export const ADD_FRUIT = 'ADD_FRUIT'

// Synchronous; client-side actions
export function getFruits(fruits) { // delivering array of fruits to redux state
    return {
        type: RECEIVE_FRUITS,
        fruits
    }
}

// Async; server-side / redux thunk
export function getFruitsRequest() { // getting array of fruits
    return (dispatch) => {
            request
                .get(fruitUrl)
                .then(res => {
                    const fruits = res.body
                    dispatch(getFruits(fruits))
                })
    }
}

export function addFruit(fruit) { // adding a fruit to redux-state
    return {
        type: ADD_FRUIT,
        fruit
    }
}


export function addFruitRequest(fruit) { // adding a fruit to our api
    return (dispatch) => {
        request
            .post(fruitUrl)
            .send(fruit)
            .then(() => {
                dispatch(addFruit(fruit))
            })
    }
}