import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/globals.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProfitsReviews } from "./components/ProfitsReviews";
import { EconomicReports } from "./components/EconomicReports";
import { Team } from "./components/Team";
import { SocialMedia } from "./components/SocialMedia";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const TradingCommunityWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set initial theme
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <ProfitsReviews />
        <EconomicReports />
        <Team />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TradingCommunityWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;