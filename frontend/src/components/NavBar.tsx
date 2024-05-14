import { useAuth0 } from "@auth0/auth0-react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const getUserInitials = (name: string | undefined) => {
  if (!name) return "NN";
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName ? lastName[0] : ""}`.toUpperCase();
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigation = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Get Your Car Info", link: "/maintenance-history" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const { loginWithRedirect, logout, isAuthenticated, user } =
    useAuth0();

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
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 relative z-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex gap-3">
            <img
              className="h-8 w-auto"
              src="/companyLogo1.png"
              alt="My Company Logo"
            />
            <span className="text-lg font-semibold leading-6 text-black-900 py-1">
              AutoMinderAI
            </span>
          </Link>
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
            <Link
              key={item.name}
              className="text-sm font-semibold leading-6 text-gray-900"
              to={item.link}
            >
              {item.name}
            </Link>
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
                      <li
                        onClick={() => logout()}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      >
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
      <header className="absolute inset-x-0 top-0 z-50">
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
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <div className="fixed inset-0 z-50" />

            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/companyLogo1.png" alt="" />
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
                        href={item.link}
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
    </>
  );
};
