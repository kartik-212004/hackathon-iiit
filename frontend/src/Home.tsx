const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="container mx-auto text-center py-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Welcome to the Person & Object Identification System
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          A cutting-edge solution for real-time identification and monitoring of individuals and objects using advanced recognition technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              Real-Time Identification
            </h2>
            <p className="text-gray-600">
              Monitor and identify people and objects in real-time using state-of-the-art face and object recognition technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              High Accuracy & Security
            </h2>
            <p className="text-gray-600">
              Ensures high accuracy in detection and identification while maintaining secure data processing and privacy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              Scalable & Efficient
            </h2>
            <p className="text-gray-600">
              Scalable to meet various identification needs, whether for small or large-scale monitoring setups.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Join Us in Enhancing Identification Technologies
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Explore our innovative person and object recognition system designed to enhance security and monitoring efficiency. Discover how our technology can assist in identification tasks and ensure safety.
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
