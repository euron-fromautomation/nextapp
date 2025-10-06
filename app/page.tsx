"use client";

import Image from "next/image";
import Link from "next/link";
import { getProviders } from "../lib/utils"; // import utils

export default function Home() {
  const providers = getProviders(); // merr të dhënat
  console.log(providers); // shiko në console

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white bg-black/50 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left">
            Compare GLP-1 <br/> Providers in the UK
          </h1>
          <Link
            href="/providers"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            View Providers
          </Link>
        </div>
      </div>

      {/* Optional: preview e providers në Home */}
      <section className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview Providers
        </h2>
        <ul className="space-y-2">
          {providers.map((provider) => (
            <li key={provider.name} className="text-gray-800 dark:text-gray-200">
              {provider.name} – Mounjaro: £{provider.mounjaro_price}, Wegovy: £{provider.wegovy_price}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
