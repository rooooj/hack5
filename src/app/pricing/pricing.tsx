'use client'
import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold">Simple Pricing</h2>
      <p className="text-gray-500 mt-2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 rounded-l ${billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r ${billingCycle === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly <span className="text-sm">(Save 25%)</span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Free Plan */}
        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">FREE</h3>
          <p className="text-gray-500">Organize across all apps by hand</p>
          <p className="text-3xl font-bold mt-4">$0</p>
          <p className="text-gray-400">Per Month</p>
          <ul className="mt-4 text-gray-600">
            <li>✔ Unlimited product updates</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="border p-6 rounded-lg shadow-md bg-blue-900 text-white">
          <h3 className="text-xl font-bold">STANDARD</h3>
          <p>Organize across all apps by hand</p>
          <p className="text-3xl font-bold mt-4">$9.99</p>
          <p className="text-gray-300">Per Month</p>
          <ul className="mt-4">
            <li>✔ Unlimited product updates</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">PREMIUM</h3>
          <p className="text-gray-500">Organize across all apps by hand</p>
          <p className="text-3xl font-bold mt-4">$19.99</p>
          <p className="text-gray-400">Per Month</p>
          <ul className="mt-4 text-gray-600">
            <li>✔ Unlimited product updates</li>
          </ul>
        </div>
      </div>

      {/* Trusted Companies */}
      <p className="text-gray-500 mt-12">Trusted by over 4000 big companies</p>
      <div className="flex justify-center space-x-8 mt-4">
        <span className="text-xl font-bold">🏢 Hooli</span>
        <span className="text-xl font-bold">🚗 Lyft</span>
        <span className="text-xl font-bold">💳 Stripe</span>
        <span className="text-xl font-bold">☁️ AWS</span>
        <span className="text-xl font-bold">👾 Reddit</span>
      </div>
    </div>
  );
};

export default Pricing;
