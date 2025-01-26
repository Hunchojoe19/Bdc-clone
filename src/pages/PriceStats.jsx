import React from "react";

const PriceStats = () => {
  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          CosCoin.com
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
            <div className="w-full flex items-start gap-x-4">
                <img
                    src="https://www.bitcoin.com/images/uploads/home/btc-logo.png"
                    alt="Bitcoin Logo"
                    className="w-10 h-10 rounded-lg"
                />
            <h2 className="text-2xl font-bold mb-4">Bitcoin (BTC)</h2>
            </div>
            <p className="text-4xl font-bold">$105,192.00</p>
            <p className="text-red-500">-0.15%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
            <div className="w-full flex items-start gap-x-4">
                <img src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png"  alt="Ethereum Logo"
                    className="w-10 h-10 rounded-lg" />
            <h2 className="text-2xl font-bold mb-4">Ethereum (ETH)</h2>
            </div>
            <p className="text-4xl font-bold">$3,343.55</p>
            <p className="text-green-500">+0.26%</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-600 px-8 py-3 rounded-lg text-white hover:bg-blue-700">
            Get Bitcoin
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceStats;