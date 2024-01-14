import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Layout from "./layout/Layout";

const Exam = () => {
  const [loading, setLoading] = useState(true);
  const [totalExam, setTotalExam] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const classExam = await axios.get("http://localhost:3000/student/viewexam");
      const totalExam = classExam.data.length;
      setTotalExam(totalExam);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Layout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
          <div className="flex flex-col gap-5 items-center justify-center h-44 rounded bg-gray-200 dark:bg-gray-800">
            <div className="w-[90%] flex justify-between items-center text-black dark:text-gray-500">
              <h1 className="text-2xl font-bold">Exams</h1>
              <div className="flex flex-col items-center text-xl font-semibold">
                <div>{loading ? <p>0</p> : <p>{totalExam}</p>}</div>
                <span>Exams</span>
              </div>
            </div>
            <hr className="h-px bg-gray-900 border-0 dark:bg-gray-700" />
            <a
              href="/exam"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <FaArrowAltCircleRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
            </a>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Exam;
