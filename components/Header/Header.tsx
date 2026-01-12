"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  {  label: "Careers", href: "/carees" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive  = (href : string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
// const isActive = (href: string) => {
//   return pathname === href;
// };
  return (
    <header className={`w-full sticky top-0 z-50 ${styles.header}`}>
      <div className="container mx-auto flex items-center justify-between py-2 md:py-0 h-[60px] md:h-[100px] ">
        {/* Logo */}
        <Link href="/" className="text-xl font-display font-bold">
          Limexpin<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2.5 rounded-lg text-base transition-colors duration-200
                ${
                    isActive(link.href)
                    ? "bg-brand-textBg text-brand-textBg"
                    : "text-brand-text hover:text-brand-text hover:bg-brand-textBg"
                }
                `}
            >
                {link.label}
            </Link>
            ))}
        </nav>
       

        <Link
            href="/contact"
            className="hidden md:flex px-5 py-2.5 rounded-xl bg-accent-500 text-black font-semibold hover:bg-accent-600 transition"
          >
           Contact Us
          </Link> 
        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden ${styles.mobileMenu}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-4 w-full text-center px-6 py-3 rounded-xl bg-accent-500 text-black font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
