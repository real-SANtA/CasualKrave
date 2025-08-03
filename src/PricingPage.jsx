// PricingPage.jsx
import React from 'react';

// This is a new component for the Pricing page.
// It provides a clear, simple pricing structure.
export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-2xl font-bold mb-4">Basic Relaxation</h2>
          <p className="text-4xl font-extrabold text-orange-600 mb-2">$50</p>
          <p className="text-gray-500 mb-6">per hour</p>
          <ul className="text-left text-gray-700 space-y-2 mb-8">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 60-Minute Swedish Massage</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Aromatherapy Included</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Relaxing Music</li>
          </ul>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-xl transition-colors duration-200">
            Select Plan
          </button>
        </div>
        
        {/* Premium Plan - Featured */}
        <div className="bg-orange-500 text-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform scale-105 relative z-10">
          <div className="absolute -top-4 bg-yellow-400 text-yellow-900 text-xs font-bold uppercase py-1 px-4 rounded-full">Most Popular</div>
          <h2 className="text-2xl font-bold mb-4">Ultimate Serenity</h2>
          <p className="text-5xl font-extrabold mb-2">$85</p>
          <p className="text-orange-200 mb-6">per hour</p>
          <ul className="text-left text-gray-100 space-y-2 mb-8">
            <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> 90-Minute Deep Tissue or Hot Stone</li>
            <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Customized Essential Oils</li>
            <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Scalp Massage</li>
            <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Refreshments Post-Massage</li>
          </ul>
          <button className="w-full bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-6 rounded-xl transition-colors duration-200">
            Select Plan
          </button>
        </div>
        
        {/* Deluxe Plan */}
        <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-2xl font-bold mb-4">Couple's Retreat</h2>
          <p className="text-4xl font-extrabold text-orange-600 mb-2">$150</p>
          <p className="text-gray-500 mb-6">per couple</p>
          <ul className="text-left text-gray-700 space-y-2 mb-8">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 90-Minute Couple's Massage</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Private Room Experience</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Champagne and Chocolates</li>
          </ul>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-xl transition-colors duration-200">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}
