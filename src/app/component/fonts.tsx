import Image from "next/image";

export default function HeroSections() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image 
          src="/hero-cover-1 (1).png" 
          alt="Couple with scarf"
          width={500} 
          height={300} 
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h3 className="text-gray-500 uppercase text-sm">Summer 2020</h3>
        <h1 className="text-3xl font-bold text-gray-900">Part of the Neural Universe</h1>
        <p className="text-gray-700 mt-4">We know how large objects will act, but things on a small scale.</p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">BUY NOW</button>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-lg">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
