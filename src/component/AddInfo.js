// 반복문
// li하나 넣기 dl>dt, dd <dfn>예약자명</dfn>
import {BiTrash} from 'react-icons/bi'

function AddList(){
    <ul>
        {
        }
    </ul>
}


function AddInfo(){
    return(
        <li>
            <dl>
                <dt>애기이름</dt>
                <dd>
                <dfn>예약자명</dfn>
                예약자명데이터
                </dd>
                <dd className='desc'>설명</dd>
                <dd className='date'>날짜 - 시간</dd>
            </dl>
            <p>
                <button><BiTrash /></button>
            </p>
        </li>
    )
}

export default AddInfo;