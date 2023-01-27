// form 요소
import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";


function AddWrite({toggleForm}){
  if(!toggleForm){
    return null;
  }
  return(
    <>
    <ul>
        <li><label htmlFor="userName">집사명</label><input type="text" id="userName"/></li>
        <li><label htmlFor="userChildren">애기명</label><input type="text" id="userChildren"/></li>
        <li><label htmlFor="userDate">예약일</label><input type="date" id="userDate"/></li>
        <li><label htmlFor="userTime">예약시간</label><input type="time" id="userTime"/></li>
        <li>
        <label htmlFor="userData">기타설명</label>
        <textarea id="userData"></textarea>
        </li>
      </ul>
      <p>
        <button type="submit">예약하기</button>
      </p>
    </>
  )
}





function AddAppointment() {
  const [toggleForm,setToggleForm] = useState(false);
  
  return (
    <div id="appoint">
      <h4 onClick={()=>setToggleForm(!toggleForm)}
      ><BiCalendarPlus />예약하기</h4>
      <AddWrite toggleForm={toggleForm}/>
    </div>
  );
}

export default AddAppointment;
