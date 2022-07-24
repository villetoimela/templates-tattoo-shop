import React from "react";
import { NavbarLink } from "./navbar-link";


export function Navbar({}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const close = () => setNavbarOpen(false);

  const genericHamburgerLine = `h-[3px] rounded-xl w-6 my-0.5 bg-orange-400 transition ease transform duration-300`;
  return (
    <>
      <nav className="fixed top-0 py-6 z-40 bg-black backdrop-blur-sm bg-opacity-40 w-full px-8 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center lg:justify-center justify-between">
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="flex flex-col justify-center items-center group lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <div
                className={`${genericHamburgerLine} ${
                  navbarOpen
                    ? "rotate-45 translate-y-2  group-hover:opacity-100"
                    : "opacity-100 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  navbarOpen
                    ? "opacity-0"
                    : "opacity-100 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  navbarOpen
                    ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-100"
                    : "opacity-100 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
          <div
            className={
              "lg:flex items-center" + (navbarOpen ? "  flex" : " hidden")
            }>
            <ul
              onClick={close}
              className="flex flex-col lg:pt-0 pt-10 lg:space-y-0 space-y-6 lg:flex-row lg:space-x-12 list-none lg:ml-auto">
              <NavbarLink text={"tietoa"} to={"tietoa"} />
              <NavbarLink text={"Ajankohtaista"} to={"ajankohtaista"} />
              <NavbarLink text={"Artistit"} to={"artistit"} />
              <NavbarLink text={"Asiointi"} to={"asiointi"} />
              <NavbarLink text={"Ota yhteyttä"} to={"ota-yhteytta"} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
