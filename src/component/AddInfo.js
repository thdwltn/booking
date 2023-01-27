// 반복문
// li하나 넣기 dl>dt, dd <dfn>예약자명</dfn>
// src => dataimport로 가져올 수 있지만, public에 있어서 fetch로 가져온다.
import {BiTrash} from 'react-icons/bi'

function AddInfo({appointment,onDeleteAppoint}){
    return(
        <li>
            <dl>
                <dt>{appointment.petName}</dt>
                <dd className='owner'>
                <dfn>예약자명 :</dfn>
                {appointment.ownerName}
                </dd>
                <dd className='desc'>{appointment.aptNotes}</dd>
                <dd className='date'>{appointment.aptDate}</dd>
            </dl>
            <p>
                <button type='button' onClick={()=> onDeleteAppoint(appointment.id)}><BiTrash /></button>
            </p>
        </li>
    )
}

export default AddInfo;