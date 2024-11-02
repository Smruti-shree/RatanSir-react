import { useState } from "react"
function StateScore4()
{
  const[apples,setApples] = useState(0)

  return(
    <>
    <h1>we are doing a modification</h1>
    <h1>Number of Apples:{apples}</h1>
    {apples === 0 ?
      (<p>No apple left?</p>
      ):(<p>Great! you have some apple</p>)
    }
    <button style={{color:'red'}} onClick={()=>{
      setApples(apples+1)
    }}>Add 1 Apple</button>
    <button style={{color:'red'}} onClick={()=>apples> 0 && setApples(apples-1)}>remove 1 apple</button>
    <button style={{color:'red'}} onClick={()=>setApples(0)}>Reset</button>
    </>
  )
}
export default StateScore4;