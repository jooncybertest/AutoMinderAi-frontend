const Vision = () => {
  const values = [
    {
      title: "Prioritize Car Health",
      description:
        "Utilize advanced AI to ensure your car's optimal performance. We analyze every detail to determine when maintenance is needed, keeping your vehicle running smoothly.",
    },
    {
      title: "Empower Customers",
      description:
        "We believe in transparency. Share insights gained from our AI analysis with customers, empowering them to make informed decisions about their car's maintenance needs.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We're committed to staying ahead. Our AI systems are constantly learning and evolving, incorporating the latest automotive knowledge to provide the best service possible.",
    },
    {
      title: "Provide Exceptional Support",
      description:
        "Our dedicated team is here for you. From answering questions to offering assistance, we're committed to providing outstanding support throughout your car maintenance journey.",
    },
    {
      title: "Accountability Matters",
      description:
        "We take responsibility for your car's well-being. If maintenance is required, we'll guide you through the process, ensuring your vehicle receives the care it deserves.",
    },
    {
      title: "Value Your Time",
      description:
        "Enjoy peace of mind knowing that we respect your time. With our efficient AI-driven system, you can relax during downtime, confident that your car is in good hands.",
    },
  ];

  return (
    <section className="mt-16 bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Vision
          </h3>
          <p className="mt-4 text-lg leading-7 text-gray-600 mx-auto max-w-2xl">
            Our vision is to become the leading platform for car maintenance and
            support, leveraging AI and innovative technologies to simplify car
            care for everyone.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-lg font-semibold leading-6 text-gray-900">
                {value.title}
              </h4>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
