import Image from "next/image";

export default function LargePicDiv() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] 2xl:h-[1100px] overflow-hidden">
      <Image
        src="/desktop-shop-cards-31 (3).png" // Replace with your image path
        alt="Large Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
  );
}
