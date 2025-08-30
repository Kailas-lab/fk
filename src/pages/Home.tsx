import React from 'react';
import Hero from '../components/Hero';
import Accreditations from '../components/Accreditations';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <Hero />
      <Accreditations />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;