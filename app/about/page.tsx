export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl bg-white backdrop-blur-md bg-opacity-70 shadow-2xl rounded-2xl p-10 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse text-center">
          About Us
        </h1>
        <p className="text-gray-700 mb-4 text-lg">
          Welcome to our website! We are passionate about building awesome web applications
          and providing great user experiences. Our team is dedicated to creating modern,
          efficient, and scalable solutions for our clients.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          This page is built using Next.js and styled with TailwindCSS. We aim to make
          navigation simple, content clear, and the interface visually appealing.
        </p>
        <p className="text-gray-700 text-lg">
          Feel free to explore our other pages and learn more about our projects and services.
          We hope you enjoy your visit!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

 