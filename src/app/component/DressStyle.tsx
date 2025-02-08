import React from 'react';
import Image from 'next/image';

const DressStyle = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 md:py-16 lg:py-20 bg-[#23856D]">
        <div className="text-white flex-1 space-y-4 text-center lg:text-left">
          <p className="text-sm">SUMMER 2020</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Vita Classic Product</h1>
          <p className="text-base md:text-lg">We know how large objects will act, We know how our objects will act, We know.</p>
          <button className="bg-green-500 px-6 py-3 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300">
            Add to Cart
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-6 lg:mt-0">
          <Image src="/shop-hero-2-png-picture-1.png" width={400} height={600} alt="Model with Bags" className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default DressStyle;