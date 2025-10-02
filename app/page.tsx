"use client";

import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Full-width navbar me ngjyrë të lehtë */}
      <header className="w-full bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8 justify-center">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Main content */}
      <main className="mt-8 text-center px-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to our site!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore our products and learn more about us.
        </p>
      </main>

    </div>
  );
}
