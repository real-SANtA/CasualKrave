import React from 'react';



// The Footer component provides the footer content with links and contact information.

export default function Footer() {

  return (

    <footer className="bg-gray-900 text-white py-12">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="col-span-1">

          <h3 className="text-xl font-bold mb-4 text-blue-400">CasualKrave</h3>

          <p className="text-gray-400 text-sm">Where Serenity Meets Modern Life.</p>

        </div>

        <div className="col-span-1">

          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2">

            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Home</a></li>

            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Services</a></li>

            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Show Map</a></li>

            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Add Listing</a></li>

          </ul>

        </div>

        <div className="col-span-1">

          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          <ul className="space-y-2">

            <li className="text-gray-400">Email: info@casualkrave.com</li>

            <li className="text-gray-400">Phone: +1 (555) 123-4567</li>

            <li className="text-gray-400">Address: 123 Serenity Lane, Wellness City</li>

          </ul>

        </div>

        <div className="col-span-1">

          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

          <div className="flex space-x-4">

            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">

              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 6.942a8.777 8.777 0 01-2.428.665A4.39 4.39 0 0021.579 5.25a8.795 8.795 0 01-2.791 1.07A4.385 4.385 0 0015.5 4a4.392 4.392 0 00-4.392 4.392c0 .344.039.678.113 1.002-3.655-.183-6.89-1.939-9.06-4.595a4.398 4.398 0 00-1.218 2.222 4.388 4.388 0 001.954 3.66 4.364 4.364 0 01-1.986-.549v.054a4.391 4.391 0 003.528 4.303 4.417 4.417 0 01-1.984.076 4.397 4.397 0 004.108 3.048A8.8 8.8 0 013 20.316a12.44 12.44 0 006.594 1.936c7.915 0 12.247-6.551 12.247-12.247 0-.187-.004-.373-.013-.56a8.718 8.718 0 002.137-2.218z"></path></svg>

            </a>

            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">

              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.773 1.637 4.921 4.92.058 1.267.069 1.647.069 4.85s-.012 3.583-.07 4.85c-.148 3.252-1.637 4.773-4.92 4.921-1.267.058-1.647.069-4.85.069s-3.583-.012-4.85-.07c-3.252-.148-4.773-1.637-4.92-4.92-.058-1.267-.069-1.647-.069-4.85s.012-3.583.07-4.85c.148-3.252 1.637-4.773 4.92-4.921 1.267-.058 1.647-.069 4.85-.069zm0-2.163c-3.268 0-3.682.013-4.954.072-4.35 1.98-6.19 3.842-6.386 8.16-.059 1.272-.073 1.686-.073 4.954s.014 3.682.073 4.954c.196 4.318 2.036 6.18 6.386 6.386 1.272.059 1.686.073 4.954.073s3.682-.014 4.954-.073c4.35-.196 6.19-2.036 6.386-6.386.059-1.272.073-1.686.073-4.954s-.014-3.682-.073-4.954c-.196-4.318-2.036-6.18-6.386-6.386-1.272-.059-1.686-.073-4.954-.073zM12 5a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10zM18.5 4.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"></path></svg>

            </a>

            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">

              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 22H0V10h4v12zM2 0a2 2 0 110 4 2 2 0 010-4z"></path></svg>

            </a>

          </div>

        </div>

      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-700 pt-8 text-center">

        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CasualKrave Massage. All rights reserved.</p>

      </div>

    </footer>

  );

}

