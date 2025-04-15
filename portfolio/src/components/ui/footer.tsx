"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed and built with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              Want to get in touch?
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
