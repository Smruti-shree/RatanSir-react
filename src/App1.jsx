import { useState } from "react";

function App1()
{
    const[score,setScore] = useState(0);

    return(
        <>
        <h1>Cricket Score..{score}</h1>
        <button onClick={()=>setScore(score+1)} > +1 </button>
        <button onClick={()=>setScore(score+2)} > +2 </button>
        <button onClick={()=>setScore(score+3)} > +3 </button>
        <button onClick={()=>setScore(score+4)} > +4 </button>
        <button onClick={()=>setScore(score+6)} > +6 </button>
        <button onClick={()=>setScore(score+7)} > +7 </button>
        </>
    )
}
export default App1;