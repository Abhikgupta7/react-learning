import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './slice/counterSlice';

const Print = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const addFunc = () => {
        dispatch(increment(1))
    }

    const subFunc = () => {
        dispatch(decrement(1))
    }

    return (
        <div>
            <button onClick={addFunc}>Add</button>
            <button onClick={subFunc}>Sub</button>
            <p>{counter}</p>
        </div>
    )
}

export default Print