import CTASection from "../components/CTASection";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import PricingSection from "../components/PricingSection";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <CTASection />
      <PricingSection />
    </div>
  );
};
