import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../utils/Auth";

function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: ""
  });

  const fetchJobs = () => {
    axios.get("http://localhost:8080/jobs/all", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
  }).then(res => setJobs(res.data));
  };

  const postJob = () => {
    axios.post("http://localhost:8080/jobs/add", newJob, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(() => {
      alert("Job Posted!");
      setNewJob({title: "", company: "", location: "", description: ""});
      fetchJobs();
    })
    .catch(error => {
      console.error("Error posting job : ",error);
      alert("Failed to post job!");
    });
  };

  const deleteJob = (jobId) => {
    axios.delete(`http://localhost:8080/jobs/delete/${jobId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(() => {
      alert("Job deleted");
      setJobs(jobs.filter(job => job.id !== jobId));
      fetchJobs();
    })
    .catch((err) => {
      console.error("Error deleting job", err);
      alert("Failed to delete job!.")
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className = "min-h-screen bg-grey-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

      {/* Job Form */}
      <div className="max-w-2xl mx-auto bg-black p-6 rounded shadow m-10">
        <h2 className="text-xl font-semibold mb-4">Post a New Job</h2>
        <input className="w-full border p-2 mb-3" placeholder="Job Title"
          value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} />

        <input className="w-full border p-2 mb-3" placeholder="Company"
        value={newJob.company} onChange={e => setNewJob({...newJob, company: e.target.value})} />

        <input className="w-full border p-2 mb-3" placeholder="Location"
        value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} />

        <textarea className="w-full border p-2 mb-3" placeholder="Description"
        value={newJob.description} onChange={e => setNewJob({...newJob, description: e.target.value})} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded " onClick={postJob}>Post Job</button>
      </div>
      {/* Job List */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4"> All Posted Jobs</h2>
        <div className="grid gap=6">
          {jobs.map((job) =>(
            <div key={job.id} className="bg-black p-5 rounded shadow relative">
              <h3 className="text-lg font-bold">{jobs.title}</h3>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-sm mt-2">{job.description}</p>
              <button className="absolute top-4 right-4 text-red-600 hover:underline"
              onClick={()=> deleteJob(job.id)}>Delete</button>
            </div>
          ))};  
          
        </div> 

      </div>
    </div>
  );
}

export default AdminDashboard