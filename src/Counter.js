import { useMemo, useState } from "react";

const Counter=()=>{
    const [counterOne,setCounterOne]=useState(0);

    const clickCounter=()=>{
        setCounterOne(counterOne+1)
    }
    const hello=useMemo(()=>{
        return `Hello World`
    },[])
    return(
        <div>
             <button onClick={()=>clickCounter()}>Click Me</button>
              {counterOne}
              {hello}
            </div>
    )
}

export default Counter;