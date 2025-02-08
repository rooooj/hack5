import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500">ABOUT COMPANY</h4>
          <h1 className="text-5xl font-bold mt-2">ABOUT US</h1>
          <p className="text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
            Get Quote Now
          </button>
        </div>
        
        {/* Right Side - Image */}
        <div className="relative">
          <Image src="/desktop-header-24.png" alt="Shopping Girl" width={500} height={500} />
        </div>
      </div>
      
      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h4 className="text-red-500 font-semibold">Problems trying</h4>
          <h2 className="text-2xl font-bold mt-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">
        <div>
          <h2 className="text-3xl font-bold">15K</h2>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">150K</h2>
          <p className="text-gray-500">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">15</h2>
          <p className="text-gray-500">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-gray-500">Top Partners</p>
        </div>
      </div>
    </div>
  );
}
