import Image from "next/image";

export default function Picture() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] 2xl:h-[1100px] overflow-hidden">
      <Image
        src="/desktop-testimonials-4 (2).png" // Ensure the path is correct
        alt="Hero Banner"
        layout="fill" // Ensures full responsiveness
        objectFit="cover" // Ensures the image covers the entire div
        priority // Optimizes loading
      />
    </div>
  );
}