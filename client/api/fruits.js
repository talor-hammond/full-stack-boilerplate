// import request from 'superagent'

// const fruitUrl = '/api/v1/fruits'

// // Synchronous actions:
// import { getFruits, addFruit } from '../actions/fruits'

// export function receiveFruits() {
//     return (dispatch) => {
//             request
//                 .get(fruitUrl)
//                 .then(res => {
//                     const fruits = res.body
//                     dispatch(getFruits(fruits))
//                 })
//     }
// }

// export function insertFruit(fruit) {
//     return (dispatch) => {
//         request
//             .post(fruitUrl)
//             .send(fruit)
//             .then(() => {
//                 dispatch(addFruit(fruit))
//             })
//     }
// }