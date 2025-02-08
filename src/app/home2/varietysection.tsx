'use client';

import Image from 'next/image';

const products = [
  { id: 1, image: '/product-cover-5 (4).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 2, image: '/fixed-height (7).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 3, image: '/product-cover-5 (5).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 4, image: '/product-cover-5 (6).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 5, image: '/product-cover-5 (7).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 6, image: '/product-cover-5 (8).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 7, image: '/product-cover-5 (9).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 8, image: '/fixed-height (1).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 9, image: '/fixed-height (9).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id: 10, image: '/product-cover-5 (12).png', title: 'Graphic Design', department: 'English Department', price: '$16.48', salePrice: '$6.48' },
  { id:11 , image:'/product-cover-5 (10).png', title:'Graphic Design',department:'English Department',price:'$16.48',salePrice:'$6.48'},
 {id:12 , image:'/product-cover-5 (2).png', title:'Graphic Design',department:'English Department',price:'$16.48',salePrice:'$6.48'},
]

export default function ProductGrid() {
  return (
    <section className="py-12 px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden">
              <Image src={product.image} alt={product.title} width={300} height={400} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.department}</p>
            <p className="text-gray-500 text-sm mt-2">
              <span className="line-through mr-2">{product.price}</span>
              <span className="text-green-600 font-bold">{product.salePrice}</span>
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
