import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { IoIosPeople } from "react-icons/io";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdAssignmentAdd } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
const SideBar = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
    setSettingsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="bg-[#000] h-full px-3 py-4 overflow-y-auto">
          <NavLink
            onClick={closeSidebar}
            to="/dashboard"
            className="flex items-center justify-center pt-5"
          >
            <img src={logo} className="m-auto" width={100} alt="Flowbite Logo" />
          </NavLink>
          <hr className="h-px my-8 bg-SecondaryColor border-0" />
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/dashboard"
                className={`flex items-center p-2  text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group `}
              >
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3 text-white group-hover:text-gray-500  ">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/clients"
                className={`flex items-center p-2  text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group `}
              >
                {/* <svg
                  className={`flex-shrink-0 w-5 h-5 text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg> */}
                <span className={`flex-shrink-0  text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor `}
                ><IoIosPeople className="w-6 h-6" /></span>
                <span className="ms-3 text-white group-hover:text-gray-500  ">
                  Career Consultant
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resources"
                onClick={toggleDropdown}
                className={`flex items-center p-2 mb-2 text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group ${isOpen && 'bg-white' && "text-PrimaryColor"}`}
              >

                <span className={`flex-shrink-0  text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor `}
                ><HiMiniAcademicCap className="w-6 h-6" /></span>
                <span className="ms-3 text-white group-hover:text-gray-500">
                  Academic Resources
                </span>
              </NavLink>
              {isOpen && (
                <ul className="dropdown-menu" style={{ marginLeft: '1rem' }}>
                  <li>
                    <NavLink
                      to="/resources/assignments"
                      className={`flex items-center p-2 mb-2 dropdown-item text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group ${isOpen && 'bg-transparent'}`}
                    >

                      <span className={`flex-shrink-0  text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor `}
                      ><MdAssignmentAdd className="w-6 h-6" /></span>
                      <span className="ms-3 text-white group-hover:text-gray-500">
                        Assignments
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resources/lectures"
                      className={`flex items-center p-2 mb-2 dropdown-item text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group ${isOpen && 'bg-transparent'}`}
                    >
                      <svg
                        className={`flex-shrink-0 w-5 h-5 text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>
                      <span className="ms-3 text-white group-hover:text-gray-500">
                        Lectures Notes
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resources/marketplace"
                      className={`flex items-center p-2 dropdown-item text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group ${isOpen && 'bg-transparent'}`}
                    >
                    
                    <span className={`flex-shrink-0  text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor `}
                      ><FaBookReader  className="w-6 h-6" /></span>
                      <span className="ms-3 text-white group-hover:text-gray-500">
                        TextBook Marketplace
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>


            <li>
              <NavLink
                onClick={closeSidebar}
                to="/learning"
                className={`flex items-center p-2  text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group `}
              >
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.1a5 5 0 0 0-4.7 1.4l-6.7 6.6a3 3 0 0 0-.8 1.6l-.7 3.7a3 3 0 0 0 3.5 3.5l3.7-.7a3 3 0 0 0 1.5-.9l4.2-4.2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M17.4 8a1 1 0 0 1 1.2.3 1 1 0 0 1 0 1.6l-.3.3-1.6-1.5.4-.4.3-.2Zm-2.1 2.1-4.6 4.7-.4 1.9 1.9-.4 4.6-4.7-1.5-1.5ZM17.9 6a3 3 0 0 0-2.2 1L9 13.5a1 1 0 0 0-.2.5L8 17.8a1 1 0 0 0 1.2 1.1l3.7-.7c.2 0 .4-.1.5-.3l6.6-6.6A3 3 0 0 0 18 6Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="ms-3 text-white group-hover:text-gray-500 ">
                  Learning  Oppertunities
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeSidebar}
                to="/blog"
                className={`flex items-center p-2  text-gray-200 rounded-lg hover:text-SecondaryColor hover:bg-gray-100 group `}
              >
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-SecondaryColor transition duration-75 group-hover:text-PrimaryColor`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.1a5 5 0 0 0-4.7 1.4l-6.7 6.6a3 3 0 0 0-.8 1.6l-.7 3.7a3 3 0 0 0 3.5 3.5l3.7-.7a3 3 0 0 0 1.5-.9l4.2-4.2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M17.4 8a1 1 0 0 1 1.2.3 1 1 0 0 1 0 1.6l-.3.3-1.6-1.5.4-.4.3-.2Zm-2.1 2.1-4.6 4.7-.4 1.9 1.9-.4 4.6-4.7-1.5-1.5ZM17.9 6a3 3 0 0 0-2.2 1L9 13.5a1 1 0 0 0-.2.5L8 17.8a1 1 0 0 0 1.2 1.1l3.7-.7c.2 0 .4-.1.5-.3l6.6-6.6A3 3 0 0 0 18 6Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="ms-3 text-white group-hover:text-gray-500 ">
                  Blog Post
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

