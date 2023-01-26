import { useState,useEffect } from "react";

function App03(){
    const [count,setCount] = useState(0);
    const [minus,setMinus] = useState(0);
 
    // useEffect(()=>{console.log(`count ${count}`)},[count]);
    // useEffect(()=>{console.log(`minus ${minus}`)},[minus]);
    // 위 두개를 한꺼번에 관리↓
    useEffect(()=> {console.log(`plus ${count} : minus ${minus}`)},[count,minus]) 
    return(
        <div>
            <h1>{count},{minus}</h1>
            <button onClick={()=>setCount(()=>count + 1)}>count</button>
            <button onClick={()=>setMinus(()=>minus - 1)}>minus</button>
        </div>
        )
}

export default App03;