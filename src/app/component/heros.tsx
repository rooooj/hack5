import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] 2xl:h-[1100px] overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          src="/carousel 1 (1).png" // Ensure the path is correct
          alt="Hero Banner"
          layout="fill" // Ensures full responsiveness
          objectFit="cover" // Ensures the image covers the entire div
          priority // Optimizes loading
        />
      </div>
      <div className="relative z-10 text-white text-center p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
        
        </h1>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-4">
          
        </p>
      </div>
    </div>
  );
}
