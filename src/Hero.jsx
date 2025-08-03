// src/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon } from 'lucide-react';

// The Hero component displays the main banner with the "About us" text and a dynamic image carousel.
export default function Hero({ setIsModalOpen }) {
  // Array of local image paths for the carousel.
  const images = [
    "public/heroimg-i.jpeg",
    "public/heroimg-ii.jpeg"
  ];
  
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to handle the automatic image switching
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Switches image every 5 seconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]); // Re-run effect if the number of images changes

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleViewStaffClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="relative w-full h-[calc(60vh+100px)] md:h-[calc(70vh+100px)] lg:h-[calc(80vh+100px)] flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with a fade effect */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src="https://placehold.co/1920x1080/000000/ffffff?text=Image+Not+Found";
            }}
          />
        ))}
      </div>
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      {/* Navigation Buttons - with adjusted opacity */}
      <button 
        onClick={prevImage}
        className="absolute left-4 md:left-8 z-20 p-2 bg-white bg-opacity-20 rounded-full text-gray-800 hover:bg-opacity-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8"/>
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-4 md:right-8 z-20 p-2 bg-white bg-opacity-20 rounded-full text-gray-800 hover:bg-opacity-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8"/>
      </button>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* About Us text block, with gradient color and positioned 10% from the left */}
        <div className="max-w-xl text-white bg-black bg-opacity-25 p-6 rounded-2xl text-left ml-[10%]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">About Us</h1>
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed drop-shadow-md">
            Welcome to CasualKrave Massage – Where Serenity Meets Modern Life.
            At CasualKrave, we believe in the art of connection and the power of touch to bring joy, relaxation, and fulfillment into your life. Our platform is dedicated to curating an exquisite selection of skilled and passionate masseuses who are committed to providing unforgettable experiences.
          </p>
        </div>
        {/* "View Staff" button for mobile users, only visible on small screens and positioned from the bottom */}
        <button 
          onClick={handleViewStaffClick}
          className="lg:hidden absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
        >
          View Staff
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </button>
      </div>
    </main>
  );
}
