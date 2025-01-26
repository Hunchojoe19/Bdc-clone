import React from "react";

const NewsSubscription = () => {
  return (
    <section className="w-full bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Stay up to date with the latest Bitcoin and crypto news
        </h1>
        <p className="text-lg text-center mb-8">
          Get the latest insights, trending stories, and market updates direct to your inbox.
        </p>
        <div className="text-center w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[50%] px-4 py-2 rounded-lg mr-2 outline-none border border-gray-300"
          />
          <button className="bg-blue-600 px-6 py-2 rounded-lg text-white hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSubscription;