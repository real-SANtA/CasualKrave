// Modal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with the title, close button, transparency, and drop-shadow */}
        <div className="p-6 md:p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-sm z-10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Staff</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* The content area below the header, which will be scrollable */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>

      </div>
    </div>,
    document.body
  );
}