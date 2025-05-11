import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import NeighborhoodsSection from '@/components/home/NeighborhoodsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <NeighborhoodsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}