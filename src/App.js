import {BiArchive} from 'react-icons/bi'
import AddAppointment from './component/AddAppointment'
import AddInfo from './component/AddInfo'
import Search from './component/Search'

function App(){
    return(
        <article>
            <h3><BiArchive style={{color:"#d47777"}}/>예약시스템</h3>           
            <AddAppointment />
            <Search />
            <div id="list">
                <ul>
                <AddInfo />
                </ul>
            </div>
        </article>
    )
}

export default App;