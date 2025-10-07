"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 py-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          GLP-1
        </h1>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 mt-2">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
