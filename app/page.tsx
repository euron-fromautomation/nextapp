
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { getProviders } from "../lib/utils";

// export default function Home() {
//   const providers = getProviders();

//   // Slider images
//   const heroImages = [
//     "/images/photo4.jpg",
//     "/images/photo1.jpg",
//     "/images/photo2.jpg",
//   ];

//   const [current, setCurrent] = useState(0);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [heroImages.length]);

//   const features = [
//     {
//       title: "Compare Prices",
//       description: "Find the best deals for GLP-1 medications across UK providers.",
//       image: "/images/comparePrice.jpg",
//       link: "/providers",
//     },
//     {
//       title: "Read Insights",
//       description: "Stay informed with the latest news and medical advice on GLP-1s.",
//       image: "/images/insights.avif",
//       link: "/providers",
//     },
//     {
//       title: "Watch Updates",
//       description: "Watch the newest trends, medical studies, and expert opinions.",
//       image: "/images/watchUpdate.jpg",
//       link: "/providers",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
//       {/* ---------- Hero Slider Section ---------- */}
//       <div className="relative w-full h-[500px] sm:h-screen overflow-hidden">
//         <AnimatePresence>
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={heroImages[current]}
//               alt={`Hero ${current + 1}`}
//               fill
//               className="object-cover"
//               priority

//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Overlay content */}
//         <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/40 px-6 sm:px-12 sm:pl-24 z-10">
//           <motion.h1
//             key={current}
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-6xl font-extrabold text-white mb-6 max-w-lg leading-tight drop-shadow-lg"
//           >
//             Compare GLP-1 <br /> Providers in the UK
//           </motion.h1>
//           <Link
//             href="/providers"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
//           >
//             View Providers
//           </Link>
//         </div>

//         {/* Navigation Dots */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === current ? "bg-white scale-125" : "bg-gray-400/70"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>

//       {/* ---------- Features Section ---------- */}
//       <section className="max-w-6xl mx-auto mt-20 px-6 flex flex-wrap justify-center gap-10 pb-20">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="group relative block rounded-3xl overflow-hidden shadow-xl cursor-pointer w-72 md:w-80 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all"
//           >
//             <div className="relative w-full h-96">
//               <Image
//                 src={feature.image}
//                 alt={feature.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
//                 <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
//                 <p className="text-white/90 text-sm mb-3">{feature.description}</p>
//                 <Link
//                   href={feature.link}
//                   className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-3 py-1.5 rounded-lg hover:bg-white/40 transition-all"
//                 >
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { getProviders } from "../lib/utils";

// export default function Home() {
//   const providers = getProviders();

//   const heroImages = [
//     "/images/photo4.jpg",
//     "/images/photo1.jpg",
//     "/images/photo2.jpg",
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [heroImages.length]);

//   const features = [
//     {
//       title: "Compare Prices",
//       description: "Find the best deals for GLP-1 medications across UK providers.",
//       image: "/images/comparePrice.jpg",
//       link: "/providers",
//     },
//     {
//       title: "Read Insights",
//       description: "Stay informed with the latest news and medical advice on GLP-1s.",
//       image: "/images/insights.avif",
//       link: "/providers",
//     },
//     {
//       title: "Watch Updates",
//       description: "Watch the newest trends, medical studies, and expert opinions.",
//       image: "/images/watchUpdate.jpg",
//       link: "/providers",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
//       {/* ---------- Hero Slider Section ---------- */}
//       <div className="relative w-full h-[500px] sm:h-[620px] overflow-hidden">
//         <AnimatePresence>
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={heroImages[current]}
//               alt={`Hero ${current + 1}`}
//               fill
//               className="object-cover object-center"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Overlay content */}
//         <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/40 px-6 sm:px-12 sm:pl-20 z-10">
//           <motion.h1
//             key={current}
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl sm:text-5xl font-extrabold text-white mb-4 max-w-lg leading-tight drop-shadow-lg"
//           >
//             Compare GLP-1 <br /> Providers in the UK
//           </motion.h1>
//           <Link
//             href="/providers"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all"
//           >
//             View Providers
//           </Link>
//         </div>

//         {/* Navigation Dots */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-all ${
//                 index === current ? "bg-white scale-125" : "bg-gray-400/70"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>

//       {/* ---------- Features Section ---------- */}
//       <section className="max-w-5xl mx-auto mt-12 px-4 flex flex-wrap justify-center gap-6 pb-12">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="group relative block rounded-2xl overflow-hidden shadow-lg cursor-pointer w-64 md:w-72 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={feature.image}
//                 alt={feature.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
//                 <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
//                 <p className="text-white/90 text-sm mb-2">{feature.description}</p>
//                 <Link
//                   href={feature.link}
//                   className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold text-xs px-2.5 py-1 rounded-lg hover:bg-white/40 transition-all"
//                 >
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProviders } from "../lib/utils";

export default function Home() {
  const providers = getProviders();

  const heroImages = [
    "/images/photo4.jpg",
    "/images/photo1.jpg",
    "/images/photo2.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    {
      title: "Compare Prices",
      description:
        "Find the best deals for GLP-1 medications across UK providers.",
      image: "/images/comparePrice.jpg",
      link: "/providers",
    },
    {
      title: "Read Insights",
      description:
        "Stay informed with the latest news and medical advice on GLP-1s.",
      image: "/images/insights.avif",
      link: "/providers",
    },
    {
      title: "Watch Updates",
      description:
        "Watch the newest trends, medical studies, and expert opinions.",
      image: "/images/watchUpdate.jpg",
      link: "/providers",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* ---------- Hero Slider Section ---------- */}
      <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[90vh] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[current]}
              alt={`Hero ${current + 1}`}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay content (Hero text section) */}
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/60 via-black/40 to-transparent px-6 sm:px-12 lg:px-28 z-10 text-white">
          <motion.h1
            key={current}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-2xl tracking-tight max-w-3xl"
          >
            Compare GLP-1 Providers <br className="hidden sm:block" /> in the UK
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-100/90 max-w-xl leading-relaxed"
          >
            Discover trusted GLP-1 providers, compare prices, and make informed health decisions — all in one place.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/providers"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Providers
            </Link>
            <Link
              href="/about"
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-medium px-6 py-3 rounded-xl border border-white/20 shadow-md text-sm sm:text-base transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>


        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white scale-125" : "bg-gray-400/70"
                }`}
            ></button>
          ))}
        </div>
      </div>

      {/* ---------- Features Section ---------- */}
      <section className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative block rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 hover:shadow-2xl transition-all"
          >
            <div className="relative w-full h-72 sm:h-80 md:h-96">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  {feature.description}
                </p>
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
