'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const products = [
  { id: 1, image: '/col-md-4 (2).png' },
  { id: 2, image: '/col-md-4 (7).png'},
  { id: 3, image: '/col-md-4 (8).png'},
  { id: 4, image: '/col-md-4 (9).png'},
  { id: 5, image: '/col-md-4 (6).png'},
];

const brands = ["hooli", "lyft", "stripe", "aws", "reddit"];

export default function Shop() {
  const [ ] = useState('grid');

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4`}>
        {products.map((product) => (
          <div key={product.id} className="relative bg-gray-200 p-4 rounded-lg overflow-hidden">
            <Image src={product.image} alt={"product:string"} width={300} height={300} className="w-full h-auto rounded-md" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              {/* You can add additional content for the product, like a name or price here */}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center my-6">
        <span className="mb-2 sm:mb-0">Showing all 12 results</span>
        <div className="flex gap-2 mb-4 sm:mb-0">
          <button className="border p-2 rounded" onClick={() => ('grid')}>Grid</button>
          <button className="border p-2 rounded" onClick={() => ('list')}>List</button>
        </div>
        <select className="border p-2 rounded mb-4 sm:mb-0">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <button className="bg-white text-white px-4 py-2 rounded">Filter</button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {brands.map((brand, index) => (
          <span key={index} className="text-gray-500 text-2xl font-bold">{brand}</span>
        ))}
      </div>
      
      <footer className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t pt-6">
        <h3 className="text-lg font-bold">Bandage</h3>
        <div className="flex gap-4">
          <FaFacebook className="text-blue-500 text-xl" />
          <FaTwitter className="text-blue-400 text-xl" />
          <FaInstagram className="text-pink-500 text-xl" />
        </div>
      </footer>
    </div>
  );
}
