import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { getRecommendations } from "../services/api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const res = await getRecommendations(query);
      setResults(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-10 transition-colors">
      {/* 🔥 HERO SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[60vh]">
        {/* LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            Smart Shopping <br />
            Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Effortless</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-xl max-w-lg leading-relaxed">
            Discover AI-powered recommendations tailored completely to your needs. Talk to our search engine like a real human.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => navigate('/products')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg font-semibold"
            >
              Shop All Products
            </button>
          </div>

          <div className="flex gap-10 mt-6 text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-3xl font-black text-blue-600 dark:text-blue-400">10k+</h2>
              <p className="text-sm font-medium uppercase tracking-wide">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-3xl font-black text-purple-600 dark:text-purple-400">1M+</h2>
              <p className="text-sm font-medium uppercase tracking-wide">Searches Computed</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl transform scale-105 -z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop"
            alt="hero"
            className="rounded-3xl shadow-2xl border border-white/20"
          />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">AI Recommendation</p>
            <h3 className="text-blue-600 font-black text-xl">99.8% Accuracy</h3>
          </motion.div>
        </motion.div>
      </div>

      {/* 🔍 SEARCH */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold dark:text-white mb-4">Try Semantic Search</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Instead of "laptop", try typing "A good device for editing 4k videos on the go"</p>
        </div>
        <SearchBar onSearch={handleSearch} />
      </motion.div>

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center mt-12">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* RESULTS */}
      {results.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-4 dark:border-gray-700">
            ✨ Tailored Results for You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {results.map((item, index) => (
              <ProductCard key={index} product={item.product} />
            ))}
          </div>
        </motion.div>
      )}

      {/* FEATURES */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 mb-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {[
          { title: "⚡ Vector Embedded Search", desc: "No more exact string matching. Our OpenAI integration intrinsically understands natural semantic language." },
          { title: "🛒 Intelligent Cart", desc: "Easily manage your items, update quantities, and enjoy a seamless path straight to the checkout." },
          { title: "🔒 Secured Ordering", desc: "Backed by enterprise level JSON Web Tokens, offering you and your customers peace of mind." }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 dark:border-gray-700 hover:-translate-y-2 transition duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                {item.title.split(" ")[0]}
            </div>
            <h3 className="font-bold text-2xl mb-4 dark:text-white">
              {item.title.slice(2)}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Home;