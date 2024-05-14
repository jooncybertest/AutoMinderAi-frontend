import Hero from "../components/Hero";
import LogoClouds from "../components/LogoClouds";
import PricingSection from "../components/PricingSection";
import Testimonial from "../components/Testimonial";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <LogoClouds />
      <Testimonial />
      <PricingSection />
    </div>
  );
};
