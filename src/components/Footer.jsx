import React from "react";
import logo from "../assets/bdc-logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Advertise</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              <li><a href="#" className="hover:text-gray-400">Partners</a></li>
              <li><a href="#" className="hover:text-gray-400">Support</a></li>
              <li><a href="#" className="hover:text-gray-400">Legal</a></li>
              <li><a href="#" className="hover:text-gray-400">Sitemap</a></li>
              <li><a href="#" className="hover:text-gray-400">My Privacy Choices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">News</a></li>
              <li><a href="#" className="hover:text-gray-400">Learning Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Wallet</a></li>
              <li><a href="#" className="hover:text-gray-400">Verse DEX</a></li>
              <li><a href="#" className="hover:text-gray-400">List in Wallet & Markets</a></li>
              <li><a href="#" className="hover:text-gray-400">Bitcoin Cash Register</a></li>
            </ul>
          </div>


        <div className="mt-8 border-t flex flex-col items-center space-y-2 border-gray-800 pt-8 text-center">
          <img src={logo} className="w-20 h-20 object-cover"/>
          <p className="text-gray-400">
            ©2025 CosCoin. All rights reserved.
          </p>
          <p className="text-gray-400">support@CosCoin.com</p>
        </div>
      </div>
    </div>
    </footer>
    
  );
};

export default Footer;