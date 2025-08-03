// LandingPage.jsx
import React from 'react';
import Hero from './Hero.jsx';
import Services from './Services.jsx';

// The LandingPage component now receives the necessary props from App.jsx.
export default function LandingPage({ setIsModalOpen, isAboutUsVisible, setIsAboutUsVisible, heroRef }) {
  return (
    <>
      {/* Pass all necessary props to the Hero component */}
      <Hero 
        setIsModalOpen={setIsModalOpen}
        isAboutUsVisible={isAboutUsVisible}
        setIsAboutUsVisible={setIsAboutUsVisible}
        heroRef={heroRef}
      />
      <Services />
    </>
  );
}