// form 요소
import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

function AddWrite({ toggleForm,formData,setFormData,formPublish }) {
  if (!toggleForm) {
    return null;
  }
  return (
    <>
      <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input type="text" id="userName" onChange={(e)=>{
            setFormData({...formData,ownerName:e.target.value})
          }}/>
        </li>
        <li>
          <label htmlFor="userChildren">애기명</label>
          <input type="text" id="userChildren" onChange={(e)=>{
            setFormData({...formData,petName:e.target.value})
          }} />
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date" id="userDate" onChange={(e)=>{
            setFormData({...formData,aptDate:e.target.value})
          }} />
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type="time" id="userTime" onChange={(e)=>{
            setFormData({...formData,aptTime:e.target.value})
          }} />
        </li>
        <li>
          <label htmlFor="userData">기타설명</label>
          <textarea id="userData" onChange={(e)=>{
            setFormData({...formData,aptNotes:e.target.value})
          }}></textarea>
        </li>
      </ul>
      <p>
        <button type="submit" onClick={formPublish}>예약하기</button>
      </p>
    </>
  );
}

function AddAppointment({onSendAppointment,lastId}) {
  // 비어있는 객체 -> reset
  const clearData = {
    'petName': '',
    'ownerName': '',
    'aptNotes': '',
    'aptDate': '',
  };

  // state
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);
  function formPublish() {
    // 1. 합본객체
    const appointmentInfo = {
      id : lastId + 1,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + ' ' + formData.aptTime
    };
    // 2. 데이터 보내기
    onSendAppointment(appointmentInfo);
    // 3. reset
    setToggleForm(!toggleForm);
    setFormData(clearData);
  }

  return (
    <div id="appoint">
      <h4 onClick={() => setToggleForm(!toggleForm)}>
        <BiCalendarPlus />
        예약하기
      </h4>
      <AddWrite
      toggleForm={toggleForm}
      formData = {formData}
      formPublish = {formPublish}
      setFormData = {setFormData}
      />
    </div>
  );
}

export default AddAppointment;
