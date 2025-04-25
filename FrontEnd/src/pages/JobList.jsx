import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8080/jobs/all")
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                console.error("Failed to Fetch jobs : ",error);
            });
    }, []);

  return (
    <div className="min-h-screen bg-grey-50 gext-gray-800">
        {/*Hero Section*/}
        <div className="bg-blue-600 text-white py-12 px-6 text-center">
            <h1 className="text-4xl font-bold mb-3">Welcome to JobPortel</h1>
            <p className="text-lg mb-5">Find Your next oppertunity or hire top talent!</p>
            <div className="space-x-4">
                <Link to="/login" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-200">
                    Login
                </Link>
                <Link to="/register" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-200">
                    Register
                </Link>
            </div>
        </div>

        {/*JobListing*/}
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Latest Job Openings</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-blue-800 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p clssName="text-grey-600 mb-2">{job.company} - {job.location}</p>
                        <p className="text-sm text-gray-700 mb-4">{job.description}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bh-blue-700">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default JobList