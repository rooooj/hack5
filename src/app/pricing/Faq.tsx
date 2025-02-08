export default function PricingFAQs() {
    return (
      <div className="container mx-auto p-6 text-center">
        {/* FAQ Section */}
        <h2 className="text-2xl font-bold">Pricing FAQs</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
  
        <div className="grid md:grid-cols-2 gap-8 mt-6 text-left">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-blue-500">&gt;</span>
              <div>
                <h3 className="font-semibold text-lg">the quick fox jumps over the lazy dog</h3>
                <p className="text-gray-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                  consequent.
                </p>
              </div>
            </div>
          ))}
        </div>
  
        <p className="mt-6 text-gray-500">Haven't got your answer? Contact our support</p>
  
        {/* Free Trial Section */}
        <div className="bg-blue-50 py-10 mt-10 rounded-lg">
          <h2 className="text-2xl font-bold">Start your 14 days free trial</h2>
          <p className="text-gray-500 mt-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Try it free now</button>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">🌐</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">📘</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">🔗</a>
          </div>
        </div>
      </div>
    );
  }
  