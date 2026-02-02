import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Process from '@/components/home/Process';
import Newsletter from '@/components/home/Newsletter';
import CTABanner from '@/components/home/CTABanner';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Stats />
      <Testimonials />
      <Process />
      <Newsletter />
      <CTABanner />
    </Layout>
  );
};

export default Index;
