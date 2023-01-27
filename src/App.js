import {BiArchive} from 'react-icons/bi'
import AddAppointment from './component/AddAppointment'
import AddInfo from './component/AddInfo'
import Search from './component/Search'
import { useState,useEffect, useCallback } from 'react'

function App(){
    // data state
    const [appointList,setAppointList] = useState([]);
    const [query,setQuery] = useState('');
    // const [sortBy,setSortBy] = useState(petName);<-이건나중에 
    const filterAppointments = (e) => {
        setQuery(e.target.value.toLowerCase())
    };
    const searched = appointList.filter((item)=>item.petName.toLowerCase().includes(query));


    
    const fetchData = useCallback(
        ()=>{
            fetch(`./data.json`)
            .then(response => response.json())
            .then(data => setAppointList(data))
        },[]
        // ( ) => {내가필요로 하는애}, [검증되어야하는 애]
    )
    useEffect(
        fetchData,[fetchData])
    // network -> 무한반복 -> sources -> 

    // const onDeleteAppoint = 
    //     () => {
    //         appointment.id = 
    //         () =>  {}
    // }



    return(
        <article>
            <h3><BiArchive style={{color:"#d47777"}}/>예약시스템</h3>           
            <AddAppointment />
            <Search />
            <div id="list">
                <ul>
                {appointList.map(
                    (appointment)=>
                    ( <AddInfo key={appointment.id}
                        appointment={appointment}
                        onDeleteAppoint={
                        appointmentId => setAppointList(
                            appointList.filter(
                                appointment => appointment.id !== appointmentId))

                    }/>)
                    )
                    }
                </ul>
            </div>
        </article>
    )
}

export default App;