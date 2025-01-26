import React from "react";

const Web3Gateway = () => {
  return (
    <section className="bg-gray-100 py-12" data-aos="zoom-in-up" data-aos-easing="ease-in-out"
     data-aos-duration="1500">
      <div className="container mx-auto px-4 flex flex-col space-y-12">
        <div className="w-full flex flex-col md:flex-row md:gap-x-4 md:items-center bg-white p-6 rounded-lg shadow-md">
        <img loading="lazy" src="https://www.bitcoin.com/static/4dab53eae9b571c73a734de7cea50bd9/89b95/web3gateway.png" className="md:w-1/2"/>
        <div className="w-full md:w-1/2 lg:px-2">

        <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-center mb-8">
          Your gateway to web3
        </h1>
        <p className="text-lg text-center md:text-left mb-8 lg:text-2xl">
          Connect to thousands of dApps and make the most out of your crypto experience.
        </p>
        </div>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse md:gap-x-4 md:items-center bg-white p-6 rounded-lg shadow-md">
        <img loading="lazy" src="https://www.bitcoin.com/static/c959bd70c887fc9280cb7fcdc632bb1d/f2e6c/earnbitcoin.png" className="md:w-1/2"/>
        <div className="w-full md:w-1/2 lg:px-2">

        <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-center mb-8">
          Earn Bitcoin
        </h1>
        <p className="text-lg text-center md:text-left mb-8 lg:text-2xl">
         Earn rewards by staking your VERSE tokens here.
        </p>
        </div>
        </div>
      
        {/* <div className="mt-8 bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
          <h2 className="text-2xl font-bold mb-4">Earn Bitcoin</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Earn rewards by staking your VERSE tokens here.
          </p>
         
        </div> */}
      </div>
    </section>
  );
};

export default Web3Gateway;