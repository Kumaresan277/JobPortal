import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "USER"
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8080/auth/register", form);
      alert("Registered successfully!");
      navigate("/login");
    }catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-blue-400 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Create Account</h2>
        
        <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
        <input type="text" className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring focus:border-blue-500" 
        placeholder="Enter username"
        onChange={(e) => setForm({...form, username:e.target.value})}></input>

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input type="password" className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring focus:border-blue-500" 
        placeholder="Enter password"
        onChange={(e) => setForm({...form, password:e.target.value})}></input>

        <label className="block mb-2 text-sm font-medium text-orange-700">Role</label>
        <select 
        className="w-full p-2 border rounded mb-6"
        onChange={(e) => setForm({...form, role: e.target.value})}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button 
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={handleRegister}>
          Register
        </button>

      </div>

    </div>
  )
}

export default Register