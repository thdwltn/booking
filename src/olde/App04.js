import { useReducer, useState } from "react";

function App04(){
    // const [checked,setChecked] = useState(false);
    // const [checked,setChecked] = useReducer(함수,초기값);
    const [checked,setChecked] = useReducer((checked)=> !checked,false);
    return(
        <div>
            <input  type="checkbox"
                    value={checked}
                    onClick = {()=> setChecked()}/>    
            <label>
                {/* {`${checked}`} */}
                {checked ? "checked" : "non-checked"}
            </label>
        </div>
    )
}

export default App04;