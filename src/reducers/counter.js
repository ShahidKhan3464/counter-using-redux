import * as actions from '../actions/actionType'

const initialState = {
    counter: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.increment:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actions.decrement:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actions.add:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case actions.subtract:
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        default:
            return state
    }
}