import axios  from "axios";
import { useState } from "react";

const Dashboard = () => {
    const [profile, setProfile] = useState({userName: ""});

    const getProfile = async () => {
   //   const response = await axios.post('/api/auth/login',credentials)
        const response = await axios.get('/api/profile');
        console.log(response);
        setProfile(response.data);
    }

    const logout = async () => { 
        const response = await axios.post('/api/auth/logout')
        console.log(response)
     }
    

    return ( <div>
        <h1>Dashboard</h1>
        <button onClick={()=> getProfile()}>
            Get Profile
        </button>
        <button onClick={() => logout()}>
            Logout
        </button>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div> );
}
 
export default Dashboard;