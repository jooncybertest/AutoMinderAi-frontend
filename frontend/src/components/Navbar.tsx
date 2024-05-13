import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import AutoMinderLogo from "../assets/companyLogo.png";
import { ThemeProvider, useTheme } from "next-themes";
import MoonIcon from "../assets/Moon.svg";
import SunIcon from "../assets/Sun.svg";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeProvider>
      <Navbar>
        <NavbarBrand>
          <img
            src={AutoMinderLogo}
            style={{
              height: "60px",
              borderRadius: "10px",
              opacity: 1,
              marginTop: "10px",
            }}
          />
          <p className="font-bold text-inherit px-3">AutoMinder</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <Button isIconOnly onClick={toggleTheme} color="secondary" >
          {theme === "dark" ? (
            <img src={SunIcon} alt="Light Mode" style={{ height: 24 }} />
          ) : (
            <img src={MoonIcon} alt="Dark Mode" style={{ height: 24 }} />
          )}
        </Button>
      </Navbar>
    </ThemeProvider>
  );
}
