// App.jsx
import React, { useState } from 'react';
import LandingPage from './LandingPage.jsx';
import PricingPage from './PricingPage.jsx';
import GalleryPage from './GalleryPage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Modal from './Modal.jsx';
import StaffDirectory from './StaffDirectory.jsx'; // The new staff directory component

// The main App component handles the routing and structure.
// It uses state to determine which page to render.
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to render the correct page component based on state.
  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage />;
      case 'gallery':
        return <GalleryPage />;
      default:
        // Pass the setIsModalOpen state setter to LandingPage
        return <LandingPage setIsModalOpen={setIsModalOpen} />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Close the mobile menu if a link is clicked
    setIsMenuOpen(false);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* The Header is persistent across all pages. */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {/* The main content area renders the selected page. */}
      {renderPage()}
      {/* The Footer is also persistent. */}
      <Footer />
      {/* The Modal is rendered but hidden by default. Its content is now the StaffDirectory component. */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Pass the onClose function to the StaffDirectory component so it can handle closing itself if needed */}
        <StaffDirectory onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

// Export the App component as default
export default App;
