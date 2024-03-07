import React from "react";
import FooterSection from "../components/FooterSection.js";
import HeroSection from "../components/HeroSection.js";
import "../components/Navbar.js";
import Navbar from "../components/Navbar.js";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
