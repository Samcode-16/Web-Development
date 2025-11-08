import React from "react";
import useCounter from "../hooks/UseCounter";

const CounterComponent = () => {
    const { count, increment, decrement, reset} = useCounter(0);

    return (
        <div style={{ textAlign: "center", padding: "20px"}}>
            <h2>Counter: {count}</h2>
            <button onClick = {increment}>Increase</button>
            <button onClick = {decrement}>Decrease</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
};

export default CounterComponent;