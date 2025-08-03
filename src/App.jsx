// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import LandingPage from './LandingPage.jsx';
import PricingPage from './PricingPage.jsx';
import GalleryPage from './GalleryPage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Modal from './Modal.jsx';
import StaffDirectory from './StaffDirectory.jsx'; // The new staff directory component
import { ChevronUp } from 'lucide-react'; // Import the icon for the "Back to Top" button

// The main App component handles the routing and structure.
// It uses state to determine which page to render.
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(true);
  
  // State to track if the user has scrolled down (for desktop header)
  const [isScrolled, setIsScrolled] = useState(false);

  // State for the mobile nav behavior
  const [isMobileNavHidden, setIsMobileNavHidden] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  // New state for the "Back to Top" button visibility
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  
  // New state for the hamburger menu color on the footer
  const [isFooterVisible, setIsFooterVisible] = useState(false);


  // Refs to measure section heights and positions
  const heroRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const footerRef = useRef(null); // Ref for the Footer component

  // Effect to get the hero section height on page load and resize
  useEffect(() => {
    const handleResize = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };
    handleResize(); // Initial measurement
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  // Effect to listen for scroll events and update the header's state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Desktop scroll behavior
      setIsScrolled(currentScrollY > 0);
      
      // "Back to Top" button visibility logic
      setIsBackToTopVisible(currentScrollY > 200);

      // New: Check if the user is in the footer section
      if (footerRef.current) {
        const footerPosition = footerRef.current.offsetTop;
        if (currentScrollY + window.innerHeight > footerPosition + 50) { // +50 for a little buffer
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }

      // Mobile scroll behavior
      if (window.innerWidth < 768) {
        const pageHeightThreshold = currentPage === 'home' ? heroHeight : document.documentElement.scrollHeight * 0.20;
        
        // Immediately show the navbar if the user scrolls to the top of the page
        if (currentScrollY === 0) {
          setIsMobileNavHidden(false);
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = null;
          }
        } 
        // Hide the navbar when scrolling down past the threshold
        else if (currentScrollY > pageHeightThreshold && currentScrollY > lastScrollY.current) {
          setIsMobileNavHidden(true);
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = null;
          }
        } 
        // Show the navbar with a delay when scrolling up
        else if (currentScrollY < lastScrollY.current && isMobileNavHidden) {
          if (!scrollTimeoutRef.current) {
            scrollTimeoutRef.current = setTimeout(() => {
              setIsMobileNavHidden(false);
              scrollTimeoutRef.current = null;
            }, 1280); // Changed delay to 1.28 seconds
          }
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMobileNavHidden, currentPage, heroHeight]);


  // Function to render the correct page component based on state.
  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage />;
      case 'gallery':
        return <GalleryPage />;
      default:
        // Pass the setIsModalOpen state setter and the new visibility state to LandingPage
        return (
          <LandingPage
            setIsModalOpen={setIsModalOpen}
            isAboutUsVisible={isAboutUsVisible}
            setIsAboutUsVisible={setIsAboutUsVisible}
            heroRef={heroRef} // Pass the heroRef here
          />
        );
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Close the mobile menu if a link is clicked
    setIsMenuOpen(false);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* The Header is persistent across all pages. */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsModalOpen={setIsModalOpen}
        setIsAboutUsVisible={setIsAboutUsVisible}
        isScrolled={isScrolled}
        isMobileNavHidden={isMobileNavHidden} // Pass the new state
        isFooterVisible={isFooterVisible} // Pass the new state
      />
      {/* The main content area renders the selected page. */}
      {renderPage()}
      {/* The Footer is also persistent. */}
      <Footer ref={footerRef} />
      {/* The Modal is rendered but hidden by default. Its content is now the StaffDirectory component. */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Pass the onClose function to the StaffDirectory component so it can handle closing itself if needed */}
        <StaffDirectory onClose={handleCloseModal} />
      </Modal>

      {/* The "Back to Top" button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-40 p-2 rounded-full text-white transition-opacity duration-300
                    ${isBackToTopVisible ? 'opacity-100' : 'opacity-0'}
                    bg-gradient-to-r from-orange-400 to-orange-600 bg-opacity-80 hover:bg-opacity-100 focus:outline-none`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-8 h-8"/>
      </button>

    </div>
  );
}

// Export the App component as default
export default App;