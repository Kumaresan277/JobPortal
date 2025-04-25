import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JobList from "./pages/JobList";
import AdminDashBoard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    {/*Navigation Bar*/ }
    
      <nav className="w-screen   bg-white shadow p-4 flex justify-between items-center ">
      
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">JobPortel</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
          <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
        </div>
      </nav>
    
      {/* Page Routing*/}
      <Routes>
        <Route path="/" element={<JobList/>}/>
        <Route path="/admin" element={<ProtectedRoute><AdminDashBoard /> </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
