import { useAuth0 } from "@auth0/auth0-react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MobileNav } from "./MobileNav";

const getUserInitials = (name: string | undefined) => {
  if (!name) return "NN";
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName ? lastName[0] : ""}`.toUpperCase();
};

export const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigation = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Get Your Car Info", link: "/get-your-car-info" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
    }
  };
  const goToProfilePage = () => {
    navigate("/profile");
  };
  const goToSettingPage = () => {
    navigate("/setting");
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
            <Dropdown>
              <DropdownTrigger>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-semibold text-gray-800 cursor-pointer">
                  {getUserInitials(user?.name)}
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions">
                <DropdownItem key="profile" onClick={() => goToSettingPage()}>
                  Profile
                </DropdownItem>
                <DropdownItem key="settings" onClick={() => goToSettingPage()}>
                  Settings
                </DropdownItem>
                <DropdownItem key="logout" onClick={() => logout()}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </>
  );
};
