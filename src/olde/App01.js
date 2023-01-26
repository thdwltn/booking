import { useState } from "react";

function App01(){
    // const what = useState();
    // console.log(what)
    const [title,setTitle] = useState('happy');
    // const 이름 = () => {}   === function 이름(){}
    return(
        // useState의 역할
        <div>
            <h1>state: {title}</h1>
            {/* <button onClick={}>first</button>
            <button onClick={()=>{return 작업결과}}>second</button>
            <button onClick={}>second</button> */}
            <button onClick={()=>setTitle('first')}>first</button>
            <button onClick={()=>setTitle('second')}>second</button>
        </div>
    )
}

export default App01;
