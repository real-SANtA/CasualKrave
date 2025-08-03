// Header.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Header({ currentPage, onPageChange, isMenuOpen, setIsMenuOpen, setIsModalOpen, setIsAboutUsVisible, isScrolled, isMobileNavHidden, isFooterVisible }) {
  const isLinkActive = (page) => currentPage === page;

  const handleStaffButtonClick = () => {
    setIsModalOpen(true);
    setIsAboutUsVisible(false);
  };

  return (
    <>
      {/* The floating hamburger menu button for mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`focus:outline-none p-2 rounded-md transition-colors duration-300 
            ${isFooterVisible ? 'text-white' : (isMobileNavHidden ? 'text-orange-600' : 'text-gray-800')}`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* The mobile menu content, now outside the main header */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden fixed top-0 left-0 w-full bg-white shadow-lg py-2 z-40 transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col items-center space-y-2 p-4">
          <button onClick={() => onPageChange('home')} className={`w-full text-center py-2 uppercase font-semibold ${isLinkActive('home') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Home</button>
          <button onClick={() => onPageChange('pricing')} className={`w-full text-center py-2 uppercase font-semibold ${isLinkActive('pricing') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Pricing</button>
          <button onClick={() => onPageChange('gallery')} className={`w-full text-center py-2 uppercase font-semibold ${isLinkActive('gallery') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>Gallery</button>
        </div>
      </div>

      {/* The main header container */}
      <header 
        className={`sticky top-0 z-20 transition-all duration-500 ease-in-out md:opacity-100 ${isMobileNavHidden ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-white bg-opacity-80' : 'bg-white'}`}
        // Updated drop shadow with new color and opacity
        style={isScrolled ? { boxShadow: '0 4px 6px -1px rgba(94, 94, 94, 0.2), 0 2px 4px -2px rgba(94, 94, 94, 0.2)' } : {}}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <button onClick={() => onPageChange('home')} className="flex flex-col items-start leading-none font-extrabold text-2xl md:text-3xl transition-transform duration-300 hover:scale-105 focus:outline-none">
              {/* Reverted "CasualKrave" color to original design */}
              <span className="text-gray-900">CasualKrave</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 text-lg md:text-xl -mt-1 font-bold">Massage</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex md:items-center space-x-6 lg:space-x-8">
            <button onClick={() => onPageChange('home')} className={`font-semibold uppercase transition-colors duration-200 ${isLinkActive('home') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Home
            </button>
            <button onClick={() => onPageChange('pricing')} className={`font-semibold uppercase transition-colors duration-200 ${isLinkActive('pricing') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Pricing
            </button>
            <button onClick={() => onPageChange('gallery')} className={`font-semibold uppercase transition-colors duration-200 ${isLinkActive('gallery') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Gallery
            </button>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={handleStaffButtonClick}
              className="flex items-center bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              View Staff
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}