'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white flex justify-between px-6 py-2 text-sm">
        <div className="flex gap-4">
          <span>📞 (225) 555-0118</span>
          <span>✉️ michelle.rivera@example.com</span>
        </div>
        <div>Follow Us & get a chance to win 80% off</div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Bandage</h1>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <Link href="/pricing"><li>Home</li></Link>
          <Link href="/home2"><li>Shop</li></Link>
          <Link href="/About3"><li>About</li></Link>
          <Link href="/paper"><li>Blog</li></Link>
          <Link href="/Contact1"><li>Contact</li></Link>
          <Link href="/shop"><li>Pages</li></Link>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm">Login / Register</button>
          <span>🛒 1</span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white shadow-md py-4 px-6 space-y-4 text-gray-700">
          <Link href="/pricing"><li onClick={() => setIsOpen(false)}>Home</li></Link>
          <Link href="/home2"><li onClick={() => setIsOpen(false)}>Shop</li></Link>
          <Link href="/About3"><li onClick={() => setIsOpen(false)}>About</li></Link>
          <Link href="/paper"><li onClick={() => setIsOpen(false)}>Blog</li></Link>
          <Link href="/Contact1"><li onClick={() => setIsOpen(false)}>Contact</li></Link>
          <Link href="/shop"><li onClick={() => setIsOpen(false)}>Pages</li></Link>
          <button className="text-sm">Login / Register</button>
          <span>🛒 1</span>
        </ul>
      )}
    </div>
  );
};

export default Header;
