// div search ul>li*3 
import { useState } from 'react';
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function DropDown ({toggleSort,petName,ownerName,aptDate}){
    if(!toggleSort){
        return null;
    }

    return(
        <ul>
        <li>{petName}<BiCheck/></li>
        <li>{ownerName}<BiCheck/></li>
        <li>{aptDate}<BiCheck/></li>
        </ul>
    )
}



function Search({filterAppointments,searched}){
    const [toggleSort,setToggleSort] = useState(false);
   
    return(
        <div id="search">
            <div>
                <BiSearch />
                <input type="text" placeholder="search"
                onChange={filterAppointments}
                />
                {searched.map((appointment)=>
                (
                    <DropDown key={appointment.id}
                    {...appointment}/>
                ))
                }
                <button
                type="button"
                onClick={()=>setToggleSort(!toggleSort)}
                >정렬하기<BiCaretDown /></button>
                <DropDown toggleSort={toggleSort}/>
            </div>
        </div>
    )
}

export default Search;