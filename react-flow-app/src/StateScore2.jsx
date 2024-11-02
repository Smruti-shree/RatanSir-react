import { useState} from "react";

function StateScore2()
{
    const[count,setCount] = useState(0);

    return(
        <>
        <h1>This is counter value:{count}</h1>
        <button style={{color:'green'}} onClick={()=>setCount(count + 1)}> Increment </button>
        <button style={{color:'red'}} onClick={()=>setCount(count - 1)}> Decrement </button>
        </>
    )
}
export default StateScore2;