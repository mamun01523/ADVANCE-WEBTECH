import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./layout/Layout";
import { TiArrowLeftThick } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";

const Student = () => {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/student/viewteacher");
      const teacherData = response.data;
      setTeacherData(teacherData);
      console.log(teacherData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <div className="font-bold flex justify-between items-center px-6 py-4 mb-5 text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <a href="/"><TiArrowLeftThick className="text-4xl cursor-pointer" /></a>
              <div className="text-2xl">TEACHER</div>
              <a href="/admission"><FaPlusCircle className="text-3xl cursor-pointer" /></a>
            </div>

            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Contact Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Gender
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Education
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Department
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teacherData.map((teacher, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {teacher.FirstName + " " + teacher.LastName}
                        </td>
                        <td className="px-6 py-4">{teacher.Email}</td>
                        <td className="px-6 py-4">{teacher.ContactNumber}</td>
                        <td className="px-6 py-4">{teacher.Gender}</td>
                        <td className="px-6 py-4">{teacher.Education}</td>
                        <td className="px-6 py-4">{teacher.teacherDepartmentID}</td>
                        <td className="px-6 py-4 flex gap-5">
                          <a
                            href={`/student/${teacher.teacherDepartmentID}`}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Student;
