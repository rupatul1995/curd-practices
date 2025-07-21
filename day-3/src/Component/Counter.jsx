import { useState } from "react";

function Counter(){
    const [Counter ,setCounter]=useState(1);

    function Increment(){
        setCounter(Counter+1);
    }

    function Decrement(){
        setCounter(Counter-1);

    }
    function Reset(){
        setCounter(0);
    }
    return(
<div>
    <h1>Counter:{Counter}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
</div>
    );
}

export default Counter;
