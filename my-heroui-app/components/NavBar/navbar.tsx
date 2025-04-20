"use client";

import "./navbar.css";

import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Navbar = () => {
  const activeLink = usePathname();

  return (
    <HeroUINavbar className="navigation" maxWidth="full">
      <NavbarContent className="gap-24" justify="center">
        <NavbarItem
          className={clsx(
            "transition-colors",
            activeLink === "/list"
              ? "text-primary font-semibold"
              : "text-default-600",
          )}
          isActive={activeLink === "/table"}
        >
          <Link href="/table">Table</Link>
        </NavbarItem>
        <NavbarItem
          className={clsx(
            "transition-colors",
            activeLink === "/list"
              ? "text-primary font-semibold"
              : "text-default-600",
          )}
          isActive={activeLink === "/list"}
        >
          <Link href="/list">Card</Link>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
