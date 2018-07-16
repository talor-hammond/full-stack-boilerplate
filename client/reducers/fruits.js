// Strings:
import { RECEIVE_FRUITS, ADD_FRUIT } from '../actions/fruits'

export default function (state = [], action) {
    switch (action.type) {
        case RECEIVE_FRUITS:
            return action.fruits
        case ADD_FRUIT:
            return [...state, action.fruit]
        default:
            return state
    }

}