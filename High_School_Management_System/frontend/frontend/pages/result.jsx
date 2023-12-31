import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./layout/Layout";
import { TiArrowLeftThick } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";

const Result = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/student/viewresult");
      setJsonData(response.data);
      console.log(response.data); // Check the structure of the response in the console
    } catch (error) {
      console.error(error);
    }
  }

  const filteredNotes = jsonData.filter((item) =>
    item.PublishedDate && item.PublishedDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (fileUrl) => {
    // Implement file download logic here using the fileUrl
    // For example, initiate a download or open in a new tab
    window.open(fileUrl, '_blank');
  };

  return (
    <>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <div className="font-bold flex justify-between items-center px-6 py-4 mb-5 text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <a href="/">
                <TiArrowLeftThick className="text-4xl cursor-pointer" />
              </a>
              <div className="text-2xl">Class Notes</div>
              <a href="/">
                <FaPlusCircle className="text-3xl cursor-pointer" />
              </a>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <input
                type="text"
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                placeholder="Search by Published Date"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                  <th scope="col" className="px-6 py-3">
                      Student Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Marks Obtained
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Published Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNotes.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.Student.FirstName+" "+item.Student.LastName}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.MarksObtained}
                      </td>
                      <td className="px-6 py-4">{item.PublishedDate}</td>
                      <td className="px-6 py-4 flex gap-5">
                        <button
                          onClick={() => handleDownload(item.FileUrl)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Result;
