// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import AuthorSection from '../components/home/AuthorSection';
import Membership from '../components/home/Membership';

const HomePage = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <AuthorSection />
      <Membership />
    </main>
  );
};

export default HomePage;
