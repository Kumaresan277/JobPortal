import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const login = () => {
        axios.post("http://localhost:8080/auth/login", credentials)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            navigate("/admin");
        })
        .catch((error) => console.error("Login Failed", error));
    };
  return (
    <div className="p-29">
        <h1 className="text-3xl text-purple-500 text-center font-bold mb-5">Admin Login</h1>
        <input className="block border p-2 w-full mb-3 rounded" placeholder="Username" onChange={(e)=>setCredentials({...credentials, username: e.target.value})}/>
        <input className="block border p-2 w-full mb-3 rounded" placeholder="Password" type="password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}></input>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={login}>Login</button>
    </div>
    
  );
}

export default Login