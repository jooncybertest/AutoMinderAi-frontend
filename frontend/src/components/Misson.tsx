const Mission = () => {
  return (
    <section className="mt-16 bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h3>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Our mission is to provide car owners with the most accurate and
              reliable maintenance information, ensuring their vehicles remain
              in top condition and safe to drive. We aim to empower car owners
              with data-driven insights and predictive analytics to prevent
              potential issues before they arise.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              We are committed to using advanced technology and AI to deliver
              personalized maintenance schedules and reminders, making car
              ownership more convenient and stress-free.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  44 million
                </span>
                <span className="text-lg text-gray-600">
                  Transactions every 24 hours
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  $119 trillion
                </span>
                <span className="text-lg text-gray-600">
                  Assets under holding
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">46,000</span>
                <span className="text-lg text-gray-600">
                  New users annually
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
