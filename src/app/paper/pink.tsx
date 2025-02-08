import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/product-cover-5 (13).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: "/product-cover-5 (14).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: "/fixed-height (11).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: "/product-cover-5 (18).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: "/product-cover-5 (16).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: "/product-cover-5 (19).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: "/product-cover-5 (13).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: "/fixed-height (12).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

export default function BestsellerProducts() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.department}</p>
              <p className="mt-2">
                <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
                <span className="text-green-600 font-bold">{product.newPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
