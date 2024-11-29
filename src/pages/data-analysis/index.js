import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import FeatureFour from "@components/features/FeatureFour";
import HeroSectionSeven from "@components/hero-section/HeroSectionSeven";
import TestimonialSix from "@components/testimonial/TestimonialSix";
import ServiceIt from "@components/services/ServiceIT";

//this is for data analysis demo
const DataAnalysisHome = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionSeven />
      <FeatureFour />
      <ServiceIt />
      { /*<FeatureWithBg />*/}
      { /* <TestimonialTwo swiperBgClass="bg-white" /> */ }
      <TestimonialSix swiperBgClass="bg-white" />
      { /*<TestimonialFour swiperBgClass="bg-white" /> */}
      { /*<TestimonialOne swiperBgClass="bg-white" /> */}
      { /*<TestimonialFour swiperBgClass="bg-white" />*/}
      <Footer footerDark />
    </Layout>
  );
};

export default DataAnalysisHome;
