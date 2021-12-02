import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Add, Subtract } from './actions/index'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const myState = useSelector((state) => state.reducer)
    const dispatch = useDispatch()

    return (
        <div className='App'>
            <h1>Current Counter:{myState.counter}</h1>
            <Button variant="primary" onClick={() => dispatch(Increment())}>Incremet</Button>
            <Button variant="primary" onClick={() => dispatch(Decrement())}>Decrement</Button>
            <Button variant="primary" onClick={() => dispatch(Add(10))}>Add 10</Button>
            <Button variant="primary" onClick={() => dispatch(Subtract(5))}>Subtract 5</Button>
        </div>
    )
}

export default App
