import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-6 py-12">

        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10">

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            About IntelliShop
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg text-center mb-10">
            IntelliShop is an AI-powered product recommendation platform designed to help users discover the best products quickly and efficiently.
          </p>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">⚡ Fast Search</h3>
              <p className="text-gray-500">
                Get instant results powered by intelligent embeddings.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">🎯 Smart Recommendations</h3>
              <p className="text-gray-500">
                AI understands your needs and suggests the best products.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">🛍️ Best Deals</h3>
              <p className="text-gray-500">
                Discover top-rated products with the best value.
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🚀 Tech Stack
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 rounded-full">React</span>
              <span className="px-4 py-2 bg-purple-100 rounded-full">Node.js</span>
              <span className="px-4 py-2 bg-green-100 rounded-full">MongoDB</span>
              <span className="px-4 py-2 bg-yellow-100 rounded-full">OpenAI Embeddings</span>
              <span className="px-4 py-2 bg-pink-100 rounded-full">Tailwind CSS</span>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-400 mt-10">
            © 2026 IntelliShop. Built with ❤️ using AI.
          </p>

        </div>
      </div>
    </>
  );
}

export default About;