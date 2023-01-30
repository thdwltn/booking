import {BiArchive} from 'react-icons/bi'
import AddAppointment from './component/AddAppointment'
import AddInfo from './component/AddInfo'
import Search from './component/Search'
import { useState,useEffect, useCallback } from 'react'

function App(){
    // data state
    const [appointList,setAppointList] = useState([]);
    const [query,setQuery] = useState('');
    const [sortBy,setSortBy] = useState('petName');

    const filterAppointments = appointList.filter(item => {
        return(
            item.petName.toLowerCase().includes(query.toLowerCase()) ||
            item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
            item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
        )
        }).sort(
            (a,b) => {
                return(a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1)
            }
        );


    
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
            <AddAppointment
            onSendAppointment = {
                myAppointment => setAppointList([...appointList,myAppointment])
            }
            lastId = {
                appointList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max,0)
            }/>
            <Search 
                query = {query}
                onQueryChange = {(myQuery)=> setQuery(myQuery)}
                sortBy = {sortBy}
                onSortChange = {(mySortBy)=> setSortBy(mySortBy)}
                />
            <div id="list">
                <ul>
                {filterAppointments.map(
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