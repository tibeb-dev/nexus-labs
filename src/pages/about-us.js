import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import OurStory from "@components/our-story/OurStory";
import HeroSectionTwo from "@components/hero-section/HeroSectionTwo";

const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar classOption="navbar-light" />
      <HeroSectionTwo />
      <OurStory />
      <Footer footerGradient />
    </Layout>
  );
};

export default AboutUs;
