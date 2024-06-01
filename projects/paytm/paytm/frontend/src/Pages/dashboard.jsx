import { Appbar } from "../components/Appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/User"
const Dashboard = ()=>{
    return <div>
       <Appbar></Appbar>
       <Balance value={10000}></Balance>
       <Users></Users>
    </div>
}

export default Dashboard