import Image from 'next/image';

export default function AdditionalInfo() {
  return (
    <div className="container mx-auto p-6">
      {/* Tabs Navigation */}
      <nav className="flex gap-6 border-b pb-2 text-gray-600">
        <span className="cursor-pointer">Description</span>
        <span className="font-semibold text-black cursor-pointer">Additional Information</span>
        <span className="cursor-pointer">Reviews <span className="text-green-500">(0)</span></span>
      </nav>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Left Side - Image */}
        <div className="col-span-1">
          <Image src="/single-product-1-cover-2.jpg" alt="Interior Image" width={400} height={200} className="rounded-lg shadow-lg" />
        </div>

        {/* Middle Column - Text Content */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold">the quick fox jumps over</h3>
          <p className="text-gray-600 mt-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p className="text-gray-600 mt-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.</p>
        </div>

        {/* Right Column - Bullet Points */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold">the quick fox jumps over</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>➤ the quick fox jumps over the lazy dog</li>
            <li>➤ the quick fox jumps over the lazy dog</li>
            <li>➤ the quick fox jumps over the lazy dog</li>
            <li>➤ the quick fox jumps over the lazy dog</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">the quick fox jumps over</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>➤ the quick fox jumps over the lazy dog</li>
            <li>➤ the quick fox jumps over the lazy dog</li>
            <li>➤ the quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
