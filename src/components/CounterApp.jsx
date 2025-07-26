import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


export const CounterApp = () => {

    const {counter, increment, reset, decrement} = useCounter(0)

    const [value, setValue] = useState()


  return (
    <>
    <h2>Counter:</h2>
    <h4>{counter}</h4>

    <button className="btn btn-primary" onClick={() => decrement()}>-1</button><br />
    
    <button className="btn btn-danger" onClick={() => reset()}>Reset</button><br />

    <button className="btn btn-primary" onClick={() => increment()}>+1</button><br />


    </>
  )
}

