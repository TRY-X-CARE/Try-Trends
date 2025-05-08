import React from 'react';
import Hero from '../components/home/Hero';
import TrendingProducts from '../components/home/TrendingProducts';
import FeaturedCategories from '../components/home/FeaturedCategories';
import NewArrivals from '../components/home/NewArrivals';
import CustomGiftCTA from '../components/home/CustomGiftCTA';
import Testimonials from '../components/home/Testimonials';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <TrendingProducts />
      <FeaturedCategories />
      <NewArrivals />
      <CustomGiftCTA />
      <Testimonials />
      <NewsletterSignup />
    </main>
  );
};

export default HomePage;