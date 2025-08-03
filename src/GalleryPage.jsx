// GalleryPage.jsx
import React from 'react';

// This is a new component for the Gallery page.
// It displays a grid of placeholder images.
export default function GalleryPage() {
  const images = [
    "https://placehold.co/800x600/6B7280/F9FAFB?text=Therapeutic+Room",
    "https://placehold.co/800x600/6B7280/F9FAFB?text=Relaxing+Ambience",
    "https://placehold.co/800x600/6B7280/F9FAFB?text=Professional+Staff",
    "https://placehold.co/800x600/6B7280/F9FAFB?text=Couples+Massage+Area",
    "https://placehold.co/800x600/6B7280/F9FAFB?text=Hot+Stone+Setup",
    "https://placehold.co/800x600/6B7280/F9FAFB?text=Waiting+Lounge"
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((imgSrc, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img 
              src={imgSrc} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="https://placehold.co/800x600/000000/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
