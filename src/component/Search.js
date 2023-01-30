// div search ul>li*3 
import { useState } from 'react';
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function DropDown ({toggleSort,sortBy,onSortChange}){
    if(!toggleSort){
        return null;
    }

    return(
        <ul>
        <li onClick={()=>onSortChange('petName')}>애기이름
        {(sortBy === 'petName') && <BiCheck/>}</li>
        <li onClick={()=>onSortChange('ownerName')}>예약자명
        {(sortBy === 'ownerName') && <BiCheck/>}</li>
        <li onClick={()=>onSortChange('aptDate')}>날짜
        {(sortBy === 'aptDate') && <BiCheck/>}</li>
        </ul>
    )
}



function Search({query,onQueryChange,sortBy,onSortChange}){
    const [toggleSort,setToggleSort] = useState(false);
   
    return(
        <div id="search">
            <div>
                <BiSearch />
                <input type="text" placeholder="search"
                value={query}
                onChange={(e)=>{onQueryChange(e.target.value)}}
                />
                <button
                type="button"
                onClick={()=>setToggleSort(!toggleSort)}
                >정렬하기<BiCaretDown /></button>
                <DropDown 
                toggleSort={toggleSort}
                sortBy = {sortBy}
                onSortChange = {mySort => onSortChange(mySort)}/>
            </div>
        </div>
    )
}

export default Search;