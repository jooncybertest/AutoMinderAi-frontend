import Team from "../components/Team";
import Mission from "../components/Misson";
import Vision from "../components/Vision";
import History from "../components/History";

const AboutUs = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn more about our mission, vision, and the team behind
            AutoMinder.
          </p>
        </div>
        <Mission />
        <Vision />
        <History />
        <Team />
      </div>
    </div>
  );
};

export default AboutUs;
