// Modal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

// The Modal component provides a reusable overlay and container for pop-up content.
export default function Modal({ isOpen, onClose, children }) {
  // If the modal is not open, return null to render nothing.
  if (!isOpen) return null;

  // Render the modal using a portal to a separate element in the DOM (the body).
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it.
      >
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-50"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {/* The children prop renders the content passed into the modal. */}
        {children}
      </div>
    </div>,
    document.body
  );
}
