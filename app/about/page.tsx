export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Discover the Power of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              GLP-1
            </span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            GLP-1 (Glucagon-Like Peptide-1) is a breakthrough in modern health science,
            helping regulate blood sugar, control appetite, and support healthy weight management.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            By mimicking natural hormones in your body, GLP-1 treatments improve metabolic balance,
            enhance fullness, and reduce cravings—empowering sustainable lifestyle change.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our mission is to make science-driven health solutions accessible, effective, and
            personalized for every individual ready to take charge of their well-being.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </button>
            <button className="px-8 py-3 rounded-xl border border-teal-600 text-teal-700 font-medium hover:bg-teal-50 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/about.jpg"
            alt="GLP-1 illustration"
            className="w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
