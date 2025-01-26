import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
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

          {/* Educate Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Educate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Bitcoin Whitepaper</a></li>
              <li><a href="#" className="hover:text-gray-400">Learning Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Satoshi’s Archive</a></li>
              <li><a href="#" className="hover:text-gray-400">Newsletters</a></li>
            </ul>
          </div>

          {/* Products & Services Section */}
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

          {/* Bitcoin Data Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bitcoin Data</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Block Explorer</a></li>
              <li><a href="#" className="hover:text-gray-400">Markets</a></li>
              <li><a href="#" className="hover:text-gray-400">Tools</a></li>
              <li><a href="#" className="hover:text-gray-400">Bitcoin Price (BTC-USD)</a></li>
              <li><a href="#" className="hover:text-gray-400">Solana Price</a></li>
              <li><a href="#" className="hover:text-gray-400">Ethereum Price</a></li>
            </ul>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Telegram</a>
            <a href="#" className="hover:text-gray-400">YouTube</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
            <a href="#" className="hover:text-gray-400">TikTok</a>
            <a href="#" className="hover:text-gray-400">Discord</a>
          </div>
        </div>

        {/* Get Crypto Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Get Crypto</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="#" className="hover:text-gray-400">Buy Verse</a>
            <a href="#" className="hover:text-gray-400">Buy Bitcoin</a>
            <a href="#" className="hover:text-gray-400">Buy Ethereum</a>
            <a href="#" className="hover:text-gray-400">Buy Bitcoin Cash</a>
            <a href="#" className="hover:text-gray-400">Buy USDT</a>
            <a href="#" className="hover:text-gray-400">Buy USDC</a>
            <a href="#" className="hover:text-gray-400">Buy Avalanche</a>
          </div>
        </div>

        {/* Spend Crypto Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Spend Crypto</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="#" className="hover:text-gray-400">V-Card</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Directory</a>
            <a href="#" className="hover:text-gray-400">Swap Bitcoin</a>
            <a href="#" className="hover:text-gray-400">Sell Bitcoin</a>
            <a href="#" className="hover:text-gray-400">Crypto Merchants</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Map</a>
          </div>
        </div>

        {/* Crypto Games Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Crypto Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="#" className="hover:text-gray-400">Games</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Slots</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Roulette</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Blackjack</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Dice</a>
            <a href="#" className="hover:text-gray-400">Bitcoin Gambling</a>
          </div>
        </div>

        {/* Exchanges Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Exchanges</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="#" className="hover:text-gray-400">Centralized</a>
            <a href="#" className="hover:text-gray-400">Decentralized</a>
            <a href="#" className="hover:text-gray-400">For Beginners</a>
            <a href="#" className="hover:text-gray-400">Lowest Fees</a>
            <a href="#" className="hover:text-gray-400">P2P Crypto Exchanges</a>
            <a href="#" className="hover:text-gray-400">Swap Platforms</a>
            <a href="#" className="hover:text-gray-400">USA</a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Saint Bitts LLC. Bitcoin.com. All rights reserved.
          </p>
          <p className="text-gray-400">support@bitcoin.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;