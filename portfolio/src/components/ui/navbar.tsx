"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Achievements", href: "#achievements" },
  { title: "Workshops", href: "#workshops" },
  { title: "Internships", href: "#internships" },
  { title: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(`#${sectionId}`);
        }
      }

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="text-lg font-semibold">Navigation</div>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Close">
                    <X className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetTrigger key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`py-2 text-base font-medium transition-colors hover:text-primary ${
                        activeSection === link.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </SheetTrigger>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
