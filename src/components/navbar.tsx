"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const linkClasses =
  "rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/70";

function NavLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={cn(linkClasses, className)} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-background/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Home
            </Link>
            <div className="ml-10 hidden items-baseline space-x-2 md:flex">
              {siteConfig.navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn("md:hidden", isOpen ? "block" : "hidden")}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="block"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="px-3 pt-2">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
