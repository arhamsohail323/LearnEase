import React, { useEffect, useRef, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.png"

const NavBar = () => {
  const location = useLocation()
  const path = location.pathname.split('/');
  const navigate = useNavigate()
  const navTitle = (path[2] === "dashboard" && "Dashboard") || (path[2] === "ordermanagement" && "Order Management") || (path[2] === "users" && "Users") || (path[2] === "serviceprovider" && "Service Provider") || (path[2] === "request" && "Request") || (path[2] === "adminroles" && "Admin Roles") || (path[2] === "userappsettings" && "User App Settings") || (path[2] === "providerappsettings" && "Provider App Settings") || (path[2] === "notifications" && "Notifications")
  useEffect(() => {
    if (path[1] === "admin") {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className=" shadow-sm flex flex-wrap items-center justify-between p-4 bg-Pr w-full">
      <h6 className='font-medium text-lg'>{navTitle}</h6>
      <div className="flex gap-4">
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <span
            type="button"
            className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 cursor-pointer"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={logo}
                  alt="user photo"
                />
                <span className="block text-sm text-gray-900 font-medium ms-2">
                  Learn Ease.Pk Admin 
                </span>
              </div>
              <div className="ms-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </span>
          {isDropdownOpen && (
            <div
              className=" absolute z-50 top-24 right-4  sm:top-12 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md"
              ref={dropdownRef}
            >
              <div className="px-4 py-3" onClick={() => closeDropdown()} >
                <span className="block text-sm text-gray-900 truncate">
                 Learn Ease
                </span>
                <span className="block text-sm text-gray-500 truncate">
                  {`infolearnease.pk@gmail.com`}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <div
                    onClick={() => closeDropdown()}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => { closeDropdown(); navigate('/admin/login') }}
                    className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
export default NavBar