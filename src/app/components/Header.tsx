"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "O nas", href: "#o-nas", id: "o-nas" },
    { label: "Kontakt", href: "#kontakt", id: "kontakt" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for sticky header

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-cream-50/80 backdrop-blur-md border-cream-200/50">
      <div className="max-w-6xl px-6 py-4 mx-auto md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-lg font-bold tracking-tight text-sage-800 transition-colors duration-200 group-hover:text-sage-600 md:text-xl">
              Andrzej Maślankiewicz
            </span>
            <span className="text-xs uppercase tracking-wider text-sand-600 font-medium">
              Psycholog &amp; Psychoterapeuta
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-sage-600 focus:outline-none relative py-1 ${activeSection === link.id ? "text-sage-700" : "text-cream-700"
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sage-500 rounded-full animate-fade-in" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-colors rounded-lg md:hidden text-cream-700 hover:text-sage-600 hover:bg-cream-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="border-t md:hidden bg-cream-50 border-cream-200/50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`py-2 text-base font-medium transition-colors duration-200 ${activeSection === link.id ? "text-sage-700 border-l-2 border-sage-500 pl-2" : "text-cream-700 hover:text-sage-600"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
