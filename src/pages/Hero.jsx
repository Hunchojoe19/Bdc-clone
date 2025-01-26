import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Buy your first Bitcoin today
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Buy, sell, trade, and invest in Bitcoin & crypto - all in one safe and simple app
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Safe, easy & secure</h3>
            <p className="text-gray-300">Your assets are protected with top-tier security.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">24/7 human support</h3>
            <p className="text-gray-300">Our team is always here to help you.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Get Bitcoin</h3>
            <p className="text-gray-300">Start your journey with just a few clicks.</p>
          </div>
        </div>
        <button className="mt-10 bg-blue-600 px-8 cursor-pointer py-3 rounded-lg text-lg hover:bg-blue-700">
         <a href="#contact">
                 Get Started
            </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;