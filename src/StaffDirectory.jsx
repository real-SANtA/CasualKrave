// StaffDirectory.jsx
import React from 'react';
// Importing the correct icons from lucide-react.
import { Ghost, Send, MessageCircle, MessageSquare } from 'lucide-react';

// This component displays a directory of staff members. It is designed to be rendered within a modal.
export default function StaffDirectory() {
  // Array of staff data. This is where you would store your staff information.
  // Using placeholder URLs for images and social links for demonstration.
  const staffMembers = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Lead Masseuse',
      bio: 'Jane is a certified masseuse with over 10 years of experience specializing in deep tissue and therapeutic massage.',
      imageUrl: 'https://placehold.co/400x400/FFC107/FFFFFF?text=Jane+Doe',
      socials: {
        snapchat: 'https://snapchat.com/add/janedoe',
        telegram: 'https://t.me/janedoe',
        whatsapp: 'https://wa.me/1234567890',
      },
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Aromatherapy Specialist',
      bio: 'John brings a holistic approach to wellness, using essential oils to create a serene and healing experience for every client.',
      imageUrl: 'https://placehold.co/400x400/FF5722/FFFFFF?text=John+Smith',
      socials: {
        snapchat: 'https://snapchat.com/add/johnsmith',
        telegram: 'https://t.me/johnsmith',
        whatsapp: 'https://wa.me/1234567890',
      },
    },
    {
      id: 3,
      name: 'Sarah Lee',
      role: 'Swedish Massage Therapist',
      bio: 'Sarah is an expert in Swedish massage, focusing on relaxation, stress relief, and improving circulation with gentle, flowing strokes.',
      imageUrl: 'https://placehold.co/400x400/00BCD4/FFFFFF?text=Sarah+Lee',
      socials: {
        snapchat: 'https://snapchat.com/add/sarahlee',
        telegram: 'https://t.me/sarahlee',
        whatsapp: 'https://wa.me/1234567890',
      },
    },
    {
      id: 4,
      name: 'Mike Johnson',
      role: 'Client Relations Manager',
      bio: 'Mike is dedicated to ensuring every client has an outstanding experience from start to finish, always ready to assist with a smile.',
      imageUrl: 'https://placehold.co/400x400/9C27B0/FFFFFF?text=Mike+J',
      socials: {
        snapchat: 'https://snapchat.com/add/mikej',
        telegram: 'https://t.me/mikej',
        whatsapp: 'https://wa.me/1234567890',
      },
    },
  ];

  return (
    // The main container for the staff directory content. The padding is set here.
    <div className="p-6 md:p-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Our Staff</h2>

      {/* Responsive grid for staff cards, adjusted for wider cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {staffMembers.map((staff) => (
          <div
            key={staff.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group w-full"
          >
            {/* Staff image and overlay */}
            <div className="relative">
              <img
                src={staff.imageUrl}
                alt={`Profile picture of ${staff.name}`}
                className="w-full h-48 object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="https://placehold.co/400x400/E0E0E0/616161?text=Image+Missing";
                }}
              />
              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>

            {/* Card body content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{staff.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{staff.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{staff.bio}</p>
              </div>
              
              {/* Contact and Socials section with tooltips */}
              <div className="flex items-center space-x-4 mt-auto">
                {/* Snapchat Icon (using Ghost) */}
                <a
                  href={staff.socials.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${staff.name}'s Snapchat profile`}
                  className="relative group text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  <Ghost className="w-6 h-6" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 whitespace-nowrap">
                    Snapchat
                  </span>
                </a>
                {/* Telegram Icon (using Send) */}
                <a
                  href={staff.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${staff.name}'s Telegram profile`}
                  className="relative group text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <Send className="w-6 h-6" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 whitespace-nowrap">
                    Telegram
                  </span>
                </a>
                {/* WhatsApp Icon (using MessageCircle) */}
                <a
                  href={staff.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${staff.name}'s WhatsApp profile`}
                  className="relative group text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 whitespace-nowrap">
                    WhatsApp
                  </span>
                </a>
                {/* "Text Staff" Button (using MessageSquare) */}
                <button
                  onClick={() => console.log(`Initiating a chat with ${staff.name}...`)}
                  className="flex items-center text-orange-600 hover:underline transition-colors duration-200 font-semibold text-sm"
                  aria-label={`Text ${staff.name}`}
                >
                  <MessageSquare className="w-5 h-5 mr-1" />
                  Text
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
