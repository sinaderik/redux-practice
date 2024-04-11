import React from 'react'
import { increament, decreament, increamentByAmount, reset } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";

export default function Counter() {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    const [increamentAmount, setIncreamentAmount] = useState(0)

    const addValue = Number(increamentAmount) || 0

    function resetAll() {
        setIncreamentAmount(0)
        dispatch(reset())
    }
    return (
        <div>
            <p>{counter}</p>
            <div>
                <button onClick={() => dispatch(increament())}>+</button>
                <button onClick={() => dispatch(decreament())}>-</button>
            </div>
            <input onChange={(e) => setIncreamentAmount(e.target.value)} value={addValue} type="text" />
            <div>
                <button onClick={() => dispatch(increamentByAmount(addValue))}>Increament Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </div>
    )
}
