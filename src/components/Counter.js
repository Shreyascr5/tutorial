import React from "react";
import { useState } from "react";

export default function Counter(){
    const [count, setCount]=useState(0);
    const[text, setText]=useState(true);

    function increment(){
        setCount(prevCount=>prevCount+1);
        setText(!text);
    }
    function reset(){
        setCount(0);
        setText(true);
    }

    // function decrement(){
    //     setCount(prevCount=>prevCount-1)
    // }
    return(
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={reset }>Reset</button>
            <h2>{text && <p>Hi this is a text</p>}</h2>
        </div>
    )
}