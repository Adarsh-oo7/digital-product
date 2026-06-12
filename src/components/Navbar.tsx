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
      { name: "Software Development", link: "/software-development" },
      { name: "App Development", link: "/app-development" },
      { name: "SEO Services", link: "/seo-services" },
      { name: "Social Media Management", link: "/social-media-management" },
      { name: "Business Automation", link: "/business-automation" },
      { name: "AI Chatbots & Automation", link: "/ai-powered-solutions" },
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
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.name} className="flex flex-col gap-2 pl-2 border-l border-gray-200">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.name}</span>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.link}
                      className="text-black dark:text-white hover:text-blue-600 transition pl-2 py-1 text-sm font-semibold"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.link}
                className="text-black dark:text-white hover:text-blue-600 transition text-base font-bold"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <NavbarButton href="/book" className="mt-2 w-full">Book Now</NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}



