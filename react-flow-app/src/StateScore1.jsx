import { useState} from "react";

function StateScore1()
{
    const[count,setCount] = useState(0);

    return(
        <>
        <h1>This is counter value:{count}</h1>
        <button style={{color:'green'}} onClick={()=>setCount(count + 1)}> Increment </button>
        </>
    )
}
export default StateScore1;