// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            
            <div>
              <p className="text-lg lg:text-xl font-semibold text-gray-800">Time Zenith</p>
            </div>
          </div>
          <nav>
            <h6 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Services</h6>
              <ul>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Productivity roulette</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300"></a></li>
              </ul>
          </nav>
          <nav>
            <h6 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Company</h6>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Contact</a></li>
           
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Legal</h6>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Terms of use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Cookie policy</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
