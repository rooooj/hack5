// components/Footer.js

const Footer=()=> {
  return (
    <footer className="bg-white text-black p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Carrier</a></li>
              <li><a href="#" className="hover:text-gray-400">We are hiring</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Carrier</a></li>
              <li><a href="#" className="hover:text-gray-400">We are hiring</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Business Marketing</a></li>
              <li><a href="#" className="hover:text-gray-400">User Analytic</a></li>
              <li><a href="#" className="hover:text-gray-400">Live Chat</a></li>
              <li><a href="#" className="hover:text-gray-400">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">IOS & Android</a></li>
              <li><a href="#" className="hover:text-gray-400">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-gray-400">Customers</a></li>
              <li><a href="#" className="hover:text-gray-400">API</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded bg-white text-black placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer