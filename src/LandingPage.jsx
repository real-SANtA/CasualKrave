// LandingPage.jsx
import React from 'react';
import Hero from './Hero.jsx';
import Services from './Services.jsx';

// The LandingPage component now just renders the main content of the home page.
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
