import {
  ArrowPathIcon,
  CalendarIcon,
  CheckCircleIcon,
  WrenchIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI Maintenance Predictions",
    description:
      "Receive accurate predictions about your car’s maintenance needs using advanced AI algorithms, ensuring your car stays in top shape.",
    icon: CheckCircleIcon,
  },
  {
    name: "Automated Service Reminders",
    description:
      "Never miss a service appointment with automated reminders based on your car’s maintenance schedule and usage patterns.",
    icon: CalendarIcon,
  },
  {
    name: "Detailed Maintenance History",
    description:
      "Keep track of all your car’s past services in one place, providing you with a comprehensive maintenance history.",
    icon: ArrowPathIcon,
  },
  {
    name: "Trusted Repair Shop Locator",
    description:
      "Find and connect with trusted repair shops near you, ensuring quality service and convenience for all your car maintenance needs.",
    icon: WrenchIcon,
  },
  {
    name: "Fuel Efficiency Insights",
    description:
      "Get insights into your car’s fuel efficiency and receive tips on how to improve it, saving you money on gas.",
    icon: LightBulbIcon,
  },
  {
    name: "Enhanced Security",
    description:
      "Benefit from enhanced security features that help protect your car from theft and unauthorized access.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Service Documentation",
    description:
      "Easily access and store all your car’s service documentation, making it simple to reference and share when needed.",
    icon: DocumentTextIcon,
  },
  {
    name: "Community Support",
    description:
      "Join a community of car owners and enthusiasts to share tips, get advice, and support each other in maintaining your vehicles.",
    icon: UserGroupIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Stay Ahead with AutoMinder
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Essential Features for Car Maintenance
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AutoMinder provides everything you need to ensure your car is always
            in optimal condition. From AI-driven maintenance predictions to
            finding trusted repair shops, we’ve got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
