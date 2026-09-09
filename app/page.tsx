import { HeroBanner } from '@/components/home/hero-banner';
import { BrandStrip } from '@/components/home/brand-strip';
import { FeaturedProducts } from '@/components/home/featured-products';
import { AboutSection } from '@/components/home/about-section';
import { WholesalerFeatures } from '@/components/home/wholesaler-features';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      <HeroBanner />
      <FeaturedProducts />
      <BrandStrip />
      <AboutSection />
      <WholesalerFeatures />
      <TestimonialsSection />
    </div>
  );
}
