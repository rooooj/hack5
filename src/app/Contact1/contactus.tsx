'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900">Get in touch today!</h2>
          <p className="text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-gray-900 font-semibold">Phone: +451 215 215</p>
            <p className="text-gray-900 font-semibold">Fax: +451 215 215</p>
          </div>
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/desktop-header-24 (1).png" width={500} height={400} alt="Contact Us" className="rounded-lg" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">We help small businesses with big ideas</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <div className="text-center p-6">
            <i className="fas fa-phone text-blue-500 text-4xl"></i>
            <p className="text-gray-700 mt-2">georgia.you@sample.com</p>
            <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Get Support
            </button>
          </div>
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
            <i className="fas fa-map-marker-alt text-4xl"></i>
            <p className="mt-2">georgia.you@sample.com</p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-900 rounded-lg hover:opacity-80 transition">
              Submit Request
            </button>
          </div>
          <div className="text-center p-6">
            <i className="fas fa-envelope text-blue-500 text-4xl"></i>
            <p className="text-gray-700 mt-2">georgia.you@sample.com</p>
            <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Get Support
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-16">
        <h3 className="text-3xl font-bold text-gray-900">Let&apos;s Talk</h3>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Try it Free Now
        </button>
      </div>
    </div>
  );
}
