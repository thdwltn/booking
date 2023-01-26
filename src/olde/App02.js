import { useEffect, useState } from "react";

function App02(){
    const[title,setTitle] = useState('happy');
    // mount할 때 한번 들어가고
    // unmount할 때 한번 들어가고
    // deps 변경이 되면 다시 사용 렌더링을 진행한다.
    useEffect(()=>{console.log('effect')},[title]);
     // 참조할 만 한 애가 없으면 끝나고, 
    useEffect(()=>{console.log('인수 없는 effect')},[]);
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={()=>setTitle('first')}>first</button>
            <button onClick={()=>setTitle('second')}>second</button>
        </div>
    )
}

export default App02;