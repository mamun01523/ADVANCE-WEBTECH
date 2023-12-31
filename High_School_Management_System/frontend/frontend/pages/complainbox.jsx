import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./layout/Layout";

const Complainbox = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState({ massage: "", senddate: "" });

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get("http://localhost:3000/student/viewcomplain",{ withCredentials: true });
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComplaint({ ...newComplaint, [name]: value });
  };

  const postComplaint = async () => {
    try {
      const response = await axios.post("http://localhost:3000/student/postcomplain", newComplaint,{ withCredentials: true } );
      console.log("Complaint posted:", response.data);
      setNewComplaint({ massage: "", senddate: "" });
      fetchComplaints();
    } catch (error) {
      console.error("Error posting complaint:", error);
    }
  };

  const deleteComplaint = async (id) => {
    console.log(id)
    
    try {
      await axios.delete(`http://localhost:3000/student/deletecomplain/${id}`,{ withCredentials: true });
      console.log("Complaint deleted");
      fetchComplaints();
    } catch (error) {
      console.error("Error deleting complaint:", error);
    }
  };

  return (
    <Layout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
          <h1 className="text-2xl font-bold mb-4">Complain Box</h1>
          <div className="mb-4">
            <textarea
              name="massage"
              value={newComplaint.massage}
              onChange={handleInputChange}
              placeholder="Enter your complaint massage"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="senddate"
              value={newComplaint.senddate}
              onChange={handleInputChange}
              placeholder="Enter send date"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <button onClick={postComplaint} className="bg-blue-500 text-white px-4 py-2 rounded">
              Post Complaint
            </button>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-xl font-bold mb-2">Complaints</h2>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="border px-4 py-2">massage</th>
                  <th className="border px-4 py-2">Sent Date</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.ID}>
                    <td className="border px-4 py-2">{complaint.massage}</td>
                    <td className="border px-4 py-2">{complaint.senddate}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => deleteComplaint(complaint.ID)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {complaints.length === 0 && <p>No complaints available.</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Complainbox;
