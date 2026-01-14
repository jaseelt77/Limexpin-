"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  {  label: "Careers", href: "/carees" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isActive  = (href : string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
// const isActive = (href: string) => {
//   return pathname === href;
// };
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 60);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);
  return (
    // <header className={`w-full sticky top-0 z-50 ${styles.header}`}>
    <header  className={`sticky top-0 z-50 w-full transition-all duration-300
        ${styles.header}
        ${scrolled ? styles.scrolled : styles.top}`}>
      <div className="container mx-auto flex items-center justify-between py-2 md:py-0 px-4 h-[60px] md:h-[100px] ">
        {/* Logo */}
        <Link href="/" className="text-xl text-brand-text font-display font-bold">
          LIMEXPIN<span className="text-accent-500"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2.5 rounded-[6px] text-base transition-colors duration-200 hover:bg-brand-accent hover:text-brand-text-bg
                ${
                    isActive(link.href)
                    ? "text-brand-accent bg-brand-accent/20"
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
            className="hidden md:flex px-5 py-2.5 rounded-[6px] bg-brand-accent text-brand-black font-normal hover:bg-brand-accent/50 transition"
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
              className="hidden md:flex px-5 py-2.5 rounded-[6px] bg-brand-accent text-brand-black font-normal hover:bg-brand-accent/50 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
