import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const showCompanyInfo = () => {
    alert('Company: Geeksynergy Technologies Pvt Ltd\nAddress: Sanjayanagar, Bengaluru-56\nPhone: XXXXXXXXX09\nEmail: XXXXXX@gmail.com');
  };

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white text-xl font-bold">My App</Link>
        
        <div className="flex items-center">
          <button onClick={showCompanyInfo} className="bg-blue-500 text-white p-2 rounded mr-4">
            Company Info
          </button>
          <div>
            <Link to="/signup" className="text-white mr-4">Signup</Link>
            <Link to="/login" className="text-white">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

