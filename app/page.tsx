"use client";

import Image from "next/image";
import Link from "next/link";
import { getProviders } from "../lib/utils";

export default function Home() {
  const providers = getProviders();

  const features = [
    {
      title: "Compare Prices",
      description: "Find the best deals for GLP-1 medications across UK providers.",
      image: "/images/compareprice.jpg",
      link: "/providers",
    },
    {
      title: "Read Insights",
      description: "Stay informed with the latest news and medical advice on GLP-1s.",
      image: "/images/insights.avif",
      link: "/providers",
    },
    {
      title: "Watch Updates",
      description: "Watch the newest trends, medical studies, and expert opinions.",
      image: "/images/watchUpdate.jpg",
      link: "/providers",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/40 px-6 sm:px-12 sm:pl-24">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 max-w-lg leading-tight drop-shadow-lg">
            Compare GLP-1 <br /> Providers in the UK
          </h1>
          <Link
            href="/providers"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
          >
            View Providers
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-20 px-6 flex flex-wrap justify-center gap-10 pb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative block rounded-3xl overflow-hidden shadow-xl cursor-pointer w-72 md:w-80 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all"
          >
            {/* Feature Image */}
            <div className="relative w-full h-96">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "center" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-white/90 text-sm mb-3">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-3 py-1.5 rounded-lg hover:bg-white/40 transition-all"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
