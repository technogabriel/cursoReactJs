import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SumNum, counterRes, counterReset, counterSum, setTemporal } from '../redux/actions/CounterActions'


const Counter = () => {
    const {counter, temporal} = useSelector(state => state.Counter)
    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()

    const handleChange= (e)=> dispatch(setTemporal(Number(e.target.value)))
  return (
    <>
    <h1>Counter: {counter}</h1>
    <div>
    <input type="number" name="counterNumber" onChange={handleChange}/>
    </div>
    <button onClick={()=> dispatch(SumNum(temporal))}>Sumar : {temporal}</button>
    <button onClick={()=> dispatch(counterSum())}>Sumar</button>
    <button onClick={()=> dispatch(counterRes())}>Restar</button>
    <button onClick={()=> dispatch(SumNum(5))}>Sumar numeros +5 </button>
    <button onClick={()=> dispatch(counterReset())}>Resetear </button>
    </>
  )
}

export default Counter