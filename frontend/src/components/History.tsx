const History = () => {
  return (
    <section className="mt-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Our Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Founding Story</h4>
            <p className="text-lg leading-7 text-gray-700">
              Founded in 2023, AutoMinder started humbly in a small garage where
              a group of passionate car enthusiasts and tech experts gathered
              with a common vision: to revolutionize car maintenance through
              technology. Motivated by the frustration of traditional
              maintenance processes, we set out to create an innovative solution
              that would simplify car care for everyone.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-700">
              As we combined our expertise in automotive engineering and
              cutting-edge AI technology, AutoMinder was born. Our journey began
              with a commitment to excellence and a relentless drive for
              improvement.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Milestones</h4>
            <ul className="list-disc text-lg leading-7 text-gray-700">
              <li>
                <span className="font-semibold">2010:</span> AutoMinder founded
                by a team of car enthusiasts and tech experts.
              </li>
              <li>
                <span className="font-semibold">2012:</span> Launched our first
                AI-powered car maintenance system.
              </li>
              <li>
                <span className="font-semibold">2015:</span> Expanded our
                services nationwide, serving thousands of satisfied customers.
              </li>
              <li>
                <span className="font-semibold">2018:</span> Introduced
                predictive maintenance feature, further enhancing customer
                experience.
              </li>
              <li>
                <span className="font-semibold">2023:</span> Recognized as a
                leader in automotive technology, with multiple industry awards
                and accolades.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
