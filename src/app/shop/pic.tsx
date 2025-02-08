import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <header className="text-center">
        <h2 className="text-gray-500 uppercase text-sm">What We Do</h2>
        <h1 className="text-4xl font-bold mt-2">Innovation tailored for you</h1>
      </header>
      
      {/* Image Grid Section */}
      <div className="grid grid-cols-3 gap-2 mt-8">
        <div className="col-span-1 row-span-2">
          <Image src="/unsplash_Lks7vei-eAg.png" alt="Main Image" width={1000} height={530} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <Image src="/unsplash_gMsnXqILjp4.png" alt="Image 1" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
          <Image src="/unsplash_PSmDDeXaEWE.png" alt="Image 2" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
          <Image src="/unsplash_1-aA2Fadydc.png" alt="Image 3" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
          <Image src="/unsplash_mcSDtbWXUZU.png" alt="Image 4" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
      </div>
  )
}
  
      