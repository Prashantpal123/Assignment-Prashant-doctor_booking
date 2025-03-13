import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaHome, FaCalendarAlt, FaPhone } from 'react-icons/fa'; // Importing icons for menu items

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 flex w-full justify-center shadow-lg">
      <div className="flex justify-between md:max-w-[1100px] w-full items-center">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold">Docso Medicare LLP</div>
        
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-5 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
          <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white text-2xl">
            <IoMdClose />
          </button>
          <ul className="mt-10">
            {[
              { path: '/', label: 'Home', icon: <FaHome /> },
              { path: '/appointments', label: 'Appointments', icon: <FaCalendarAlt /> },
              { path: '/contact', label: 'Contact', icon: <FaPhone /> }
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <NavLink
                  exact
                  to={item.path}
                  activeClassName="text-blue-300 font-semibold underline"
                  className="flex items-center p-2 relative text-white hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-active:scale-x-100"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Overlay */}
        {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

        {/* Navbar Links for Desktop */}
        <ul className="hidden md:flex space-x-24">
          {[
            { path: '/', label: 'Home', icon: <FaHome /> },
            { path: '/appointments', label: 'Appointments', icon: <FaCalendarAlt /> },
            { path: '/contact', label: 'Contact', icon: <FaPhone /> }
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                exact
                to={item.path}
                className="flex items-center relative text-white font-semibold hover:font-bold px-2 py-1 transition-colors duration-200 group"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-active:scale-x-100"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar Dropdown (Hamburger Menu) */}
        <div className='md:hidden mt-1'>
          <IoMdMenu onClick={toggleSidebar} className='text-white text-3xl cursor-pointer' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;