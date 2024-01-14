// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaArrowAltCircleRight } from "react-icons/fa";


// const Home = (
//   // { onNoteClick, onTeacherClick, onExamClick , onSubjectClick}
//   ) => {
//   const [loading, setLoading] = useState(true);
//   const [totalExam, setTotalExam] = useState(null);
//   const [totalNote, setTotalNote] = useState(null);
//   const [totalTeacher, setTotalTeacher] = useState(null);
//   const [totalSubject, setTotalSubject] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const classNote = await axios.get(
//         "http://localhost:3000/student/viewclassnote"
//       );
//       const totalNote = classNote.data;
//       setTotalNote(totalNote.length);

//       const classExam = await axios.get(
//         "http://localhost:3000/student/viewexam"
//       );
//       const totalExam = classExam.data;
//       setTotalExam(totalExam.length);
      
//       const classTeacher = await axios.get(
//         "http://localhost:3000/student/viewteacher"
//       );
//       const totalTeacher = classTeacher.data;
//       setTotalTeacher(totalTeacher.length);
      
//       const classSubject = await axios.get(
//         "http://localhost:3000/student/viewsubject"
//       );
//       const totalSubject = classSubject.data;
//       setTotalSubject(totalSubject.length);
      
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <div className="p-4 sm:ml-64">
//         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
//           <div className="grid grid-cols-3 gap-4 mb-4">

//             {/* Exams */}
//             <div className="flex flex-col gap-5 items-center justify-center h-44 rounded bg-gray-200 dark:bg-gray-800">
//               <div className="w-[90%] flex justify-between items-center text-black dark:text-gray-500">
//                 <h1 className="text-2xl font-bold">Exams</h1>
//                 <div className="flex flex-col items-center text-xl font-semibold">
//                   <div>
//                     {loading ? (
//                       <p>0</p>
//                     ) : (
//                       <div>
//                         <p>{totalExam}</p>
//                       </div>
//                     )}
//                   </div>
//                   <span>Exams</span>
//                 </div>
//               </div>
//               <hr class="h-px bg-gray-900 border-0 dark:bg-gray-700" />
//               <a
//                 href="/exam"
//                 // onClick={onExamClick}
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 View
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>

//             {/* Notes */}
//             <div className="flex flex-col gap-5 items-center justify-center h-44 rounded bg-gray-200 dark:bg-gray-800">
//               <div className="w-[90%] flex justify-between items-center text-black dark:text-gray-500">
//                 <h1 className="text-2xl font-bold">Notes</h1>
//                 <div className="flex flex-col items-center text-xl font-semibold">
//                   <div>
//                     {loading ? (
//                       <p>0</p>
//                     ) : (
//                       <div>
//                         <p>{totalNote}</p>
//                       </div>
//                     )}
//                   </div>
//                   <span>Notes</span>
//                 </div>
//               </div>
//               <hr class="h-px bg-gray-900 border-0 dark:bg-gray-700" />
//               <a
//                 href="/note"
//                 // onClick={onNoteClick}
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 View
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>

//             {/* Teachers */}
//             <div className="flex flex-col gap-5 items-center justify-center h-44 rounded bg-gray-200 dark:bg-gray-800">
//               <div className="w-[90%] flex justify-between items-center text-black dark:text-gray-500">
//                 <h1 className="text-2xl font-bold">Teachers</h1>
//                 <div className="flex flex-col items-center text-xl font-semibold">
//                   <div>
//                     {loading ? (
//                       <p>0</p>
//                     ) : (
//                       <div>
//                         <p>{totalTeacher}</p>
//                       </div>
//                     )}
//                   </div>
//                   <span>Teachers</span>
//                 </div>
//               </div>
//               <hr class="h-px bg-gray-900 border-0 dark:bg-gray-700" />
//               <a
//                 href="/teacher"
//                 // onClick={onTeacherClick}
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 View
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>
                      

//                                   {/* Class */}
//             <div className="flex flex-col gap-5 items-center justify-center h-44 rounded bg-gray-200 dark:bg-gray-800">
//               <div className="w-[90%] flex justify-between items-center text-black dark:text-gray-500">
//                 <h1 className="text-2xl font-bold">Class</h1>
//                 <div className="flex flex-col items-center text-xl font-semibold">
//                   <div>
//                     {loading ? (
//                       <p>0</p>
//                     ) : (
//                       <div>
//                         {/* Display the total number of classes */}
//                         {/* Modify or remove as needed */}
//                         <p>{/* Add your total class count here */}</p>
//                       </div>
//                     )}
//                   </div>
//                   <span>Class</span>
//                 </div>
//               </div>
//               <hr className="h-px bg-gray-900 border-0 dark:bg-gray-700" />
//               <a
//                 href="/class"
//                 // onClick={onClassClick}
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 View
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>











//                       {/* Subjects */}
//             <div className="flex flex-col gap-5 items-center justify-center h-44 rounded bg-gray-200 dark:bg-gray-800">
//               <div className="w-[90%] flex justify-between items-center text-black dark:text-gray-500">
//                 <h1 className="text-2xl font-bold">Subjects</h1>
//                 <div className="flex flex-col items-center text-xl font-semibold">
//                   <div>
//                     {loading ? (
//                       <p>0</p>
//                     ) : (
//                       <div>
//                         <p>{totalSubject}</p>
//                       </div>
//                     )}
//                   </div>
//                   <span>Subjects</span>
//                 </div>
//               </div>
//               <hr class="h-px bg-gray-900 border-0 dark:bg-gray-700" />
//               <a
//                 href="/subject"
//                 // onClick={onSubjectClick}
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 View
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;