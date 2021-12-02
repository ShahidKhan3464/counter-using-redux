import * as actions from './actionType'

export function Increment() {
    return {
        type: actions.increment,
    }
}

export function Decrement() {
    return {
        type: actions.decrement,
    }
}

export function Add(val) {
    return {
        type: actions.add,
        payload: {
            value: val
        }
    }
}

export function Subtract(val) {
    return {
        type: actions.subtract,
        payload: {
            value: val
        }
    }
}