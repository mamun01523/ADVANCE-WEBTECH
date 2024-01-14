import React from "react";
import { useRouter } from "next/router";
import {
  MdHome,
  MdMessage,
  MdPerson,
  MdAnnouncement,
  MdReceipt,
  MdSchool,
  MdSubject,
} from "react-icons/md";

const ASidebar = () => {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/profile") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/profile"
            >
              <MdPerson className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Profile</span>
            </a>
          </li>
           {/* <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/"
            >
              <MdHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Home</span>
            </a>
          </li> */}
          <li> 
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/result") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/result"
            >
              <MdReceipt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Result</span>
            </a>
          </li>
          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/notice") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/notice"
            >
              <MdAnnouncement className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Notice</span>
            </a>
          </li>
          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/message") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/complainbox"
            >
              <MdMessage className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">ComplainBox</span>
            </a>
          </li>

          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/message") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/note"
            >
              <MdMessage className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Note</span>
            </a>
          </li>


          
          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/message") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/exam"
            >
              <MdSchool className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Exam</span>
            </a>
          </li>
          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/message") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/teacher"
            >
              <MdPerson className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Teacher</span>
            </a>
          </li>
          <li>
            <a
              className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive("/message") && "bg-gray-300 text-gray-900 dark:bg-gray-600"
                }`}
              href="/subject"
            >
              <MdSubject className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Subject</span>
            </a>
          </li>






        </ul>
      </div>
    </aside>
  );
};

export default ASidebar;
