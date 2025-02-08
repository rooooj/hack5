import Image from 'next/image';
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';

export default function ProductPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-gray-500 mb-4">
        <span className="text-black font-semibold">Home</span> &gt; <span>Shop</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="relative">
            <Image src="/single-product-1-cover-2.jpg" alt="Product Image" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="flex gap-4 mt-4">
            <Image src="/single-product-1-thumb-1.jpg" alt="Thumbnail 1" width={100} height={100} className="rounded-lg cursor-pointer" />
            <Image src="/single-product-1-thumb-2.jpg" alt="Thumbnail 2" width={100} height={100} className="rounded-lg cursor-pointer" />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-bold">Floating Phone</h2>
          <p className="text-yellow-500">⭐⭐⭐⭐☆ <span className="text-gray-600">10 Reviews</span></p>
          <p className="text-2xl font-semibold mt-2">$1,139.33</p>
          <p className="text-green-500 font-medium">Availability: <span className="text-black">In Stock</span></p>
          <p className="text-gray-600 mt-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
          
          {/* Color Options */}
          <div className="flex gap-2 mt-4">
            <span className="w-6 h-6 bg-teal-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-gray-800 rounded-full cursor-pointer"></span>
          </div>
          
          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Select Options</button>
            <button className="border p-3 rounded-lg text-gray-600"><FaHeart /></button>
            <button className="border p-3 rounded-lg text-gray-600"><FaShoppingCart /></button>
            <button className="border p-3 rounded-lg text-gray-600"><FaEye /></button>
          </div>
        </div>
      </div>

      {/* Tabs */}
    
    </div>
  );
}
