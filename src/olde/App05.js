// ref

import { useRef } from "react";

function App05(){
    const txtTitle = useRef();
    const clrTitle = useRef();
    const submit = (e)=>{
        let title = txtTitle.current.value;
        let color = clrTitle.current.value;
        alert(`${title} ${color}`);
    }
    return(
        <div>
            <form onSubmit={submit}>
                <input  ref={txtTitle}
                        type="text"
                        placeholder="칼라입력"
                        />
                <input  ref={clrTitle}
                        type="color"/>
                <button >알아보기</button>

            </form>
        </div>
    )
}

export default App05;