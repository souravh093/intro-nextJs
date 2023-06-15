import NavLink from "@/components/NavLink";
import Link from "next/link";
import React from "react";

const navLink = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10 min-h-screen bg-green-300 p-5">
        <h2 className="text-3xl font-semibold mb-3">Dashboard</h2>
      <ul>
        {navLink.map(({ path, title }) => (
          <li className="my-2" key={title}>
            <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
