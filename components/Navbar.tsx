"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 py-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold">GLP-1</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
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
      </div>
    </nav>
  );
}