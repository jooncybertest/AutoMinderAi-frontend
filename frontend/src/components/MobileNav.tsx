import { useAuth0 } from "@auth0/auth0-react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getUserInitials } from "./Hero";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
};

export const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen }: Props) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Get Your Car Info", href: "/get-your-car-info" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Profile", href: "/profile" },
    { name: "Setting", href: "/setting" },
  ];
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
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
  );
};
