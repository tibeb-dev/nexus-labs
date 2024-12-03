import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import FeatureFour from "@components/features/FeatureFour";
import HeroSectionSeven from "@components/hero-section/HeroSectionSeven";
import TestimonialSix from "@components/testimonial/TestimonialSix";
import ServiceIt from "@components/services/ServiceIT";

const DataAnalysisHome = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionSeven />
      <FeatureFour />
      <ServiceIt />
      <TestimonialSix swiperBgClass="bg-white" />
      <Footer footerGradient />
    </Layout>
  );
};

export default DataAnalysisHome;
