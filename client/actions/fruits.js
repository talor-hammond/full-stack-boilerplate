// Strings:
export const RECEIVE_FRUITS = 'RECEIVE_FRUITS'
export const ADD_FRUIT = 'ADD_FRUIT'

export function getFruits(fruits) {
    return {
        type: RECEIVE_FRUITS,
        fruits
    }
}

export function addFruit(fruit) {
    return {
        type: ADD_FRUIT,
        fruit
    }
}