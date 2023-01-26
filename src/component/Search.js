// div search ul>li*3 
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function Search(){
    return(
        <div id="search">
            <p>
                <BiSearch />
                <input type="text" placeholder="search"/>
                <button type="button">정렬하기</button>
                <BiCaretDown />
                <ul>
                    <li>애기이름<BiCheck/></li>
                    <li>예약자명<BiCheck/></li>
                    <li>날짜<BiCheck/></li>
                </ul>
            </p>
        </div>
    )
}

export default Search;