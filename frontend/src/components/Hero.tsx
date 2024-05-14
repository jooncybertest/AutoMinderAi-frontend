import { useAuth0 } from "@auth0/auth0-react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useRef, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Maintenance History", href: "/maintenance-history" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const getUserInitials = (name: string | undefined) => {
  if (!name) return "NN";
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName ? lastName[0] : ""}`.toUpperCase();
};

export default function Hero() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex gap-3">
              <img className="h-8 w-auto" src="/companyLogo1.png" alt="" />
              <span className="text-lg font-semibold leading-6 text-black-900 py-1">
                AutoMinderAI
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-semibold text-gray-800 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {getUserInitials(user?.name)}
                  </div>
                  <Transition
                    as={Fragment}
                    show={dropdownVisible}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg origin-top-right">
                      <ul className="py-1">
                        <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                          Profile
                        </li>
                        <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                          Settings
                        </li>
                        <li onClick={() => logout()} className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                          Logout
                        </li>
                      </ul>
                    </div>
                  </Transition>
                </div>
              </div>
            ) : (
              <span
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 hover:underline cursor-pointer"
                onClick={() => loginWithRedirect()}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </span>
            )}
          </div>
        </nav>
        <Transition
          show={mobileMenuOpen}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-300 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog
            className="fixed inset-0 z-50 lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="/companyLogo1.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    {isAuthenticated ? (
                      <div className="flex flex-col items-center space-y-2">
                        <div className="relative w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-semibold text-gray-800">
                          {getUserInitials(user?.name)}
                        </div>
                        <span className="text-sm font-semibold leading-6 text-gray-900">
                          Welcome {user?.name}!
                        </span>
                        <span
                          className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 hover:underline cursor-pointer"
                          onClick={() => logout()}
                        >
                          Log out <span aria-hidden="true">&rarr;</span>
                        </span>
                      </div>
                    ) : (
                      <span
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                        onClick={() => loginWithRedirect()}
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </Transition>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Introducing our AI-powered car maintenance predictor.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Keep Your Car in Top Shape with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Provide your car details and let our AI predict if your car needs
              maintenance right now. Stay ahead of potential issues with our
              advanced technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
