// LandingPage.jsx
import React from 'react';
import Hero from './Hero.jsx';
import Services from './Services.jsx';

// The LandingPage component now receives the setIsModalOpen prop.
export default function LandingPage({ setIsModalOpen }) {
  return (
    <>
      {/* Pass the setIsModalOpen prop to the Hero component */}
      <Hero setIsModalOpen={setIsModalOpen} />
      <Services />
    </>
  );
}