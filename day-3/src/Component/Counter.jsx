import { useState } from "react";

const Counter=()=>{

    const [counter , setCounter]=useState(0);
    
    const [counter2 , setCounter2]=useState(1);


    function Increament(){    
        if(counter<10){
        
        setCounter2(counter2+1);
    }
        setCounter(counter+1);
    }
    const Decreament=()=>{
        setCounter(counter-1);
    } 
    
    const Reset=()=>{
        setCounter(0);
    }

    return(
        <div>
        <h1>hello</h1>

<h1>Counter:{counter}</h1>

<h1>counter-2:{counter2}</h1>
<button onClick={Increament}>+</button>
<button onClick={Decreament}>-</button>
<button onClick={Reset}>Reset</button>
</div>
    );
}
export default Counter;