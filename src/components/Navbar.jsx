import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <h2 className="text-3xl font-semibold">Next Sourave</h2>
      <ul className="flex item-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={title}>
            <NavLink
              exact={path == "/"}
              activeClassName="text-blue-500"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
