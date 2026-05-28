'use client';
import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/resizeable-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { 
    name: "Services",
    link: "#",
    children: [
      { name: "Services", link: "/services" },
      { name: "AI Services", link: "/ai-services" },
    ]
  },
  { name: "Pricing", link: "/pricing" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },

];

export default function NavbarWrapper() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="/book">Book Now</NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-black dark:text-white"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <NavbarButton href="/book">Book Now</NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}



