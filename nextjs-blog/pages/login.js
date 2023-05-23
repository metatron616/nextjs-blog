import React, {useState} from 'react';
import axios  from "axios";
const LoginPage = () => {
    const [credentials, setCredentials] = useState({userName:'', password:''});

    const handleChange = (event) =>{
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(credentials);
        const response = await axios.post('/api/auth/login',credentials)
        console.log(response)
    }
     
    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='UserName: ' name='userName' onChange={handleChange}/>
            <input type="password" placeholder='Password: ' name='password' onChange={handleChange} />
            <button>Login</button>
        </form>
    </div>)
}

export default LoginPage;