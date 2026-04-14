// import { useState } from "react";
// import SearchBar from "../components/SearchBar";
// import ProductCard from "../components/ProductCard";
// import { getRecommendations } from "../services/api";

// function Home() {
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (query) => {
//     try {
//       setLoading(true);
//       const res = await getRecommendations(query);
//       setResults(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error fetching products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">

//       {/* Search */}
//       <SearchBar onSearch={handleSearch} />

//       {/* Loading */}
//       {loading && (
//         <p className="text-center text-gray-500 mt-4">
//           Searching...
//         </p>
//       )}

//       {/* Results */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//         {results.map((item, index) => (
//           <ProductCard key={index} product={item.product} />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { getRecommendations } from "../services/api";

function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const res = await getRecommendations(query);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 px-6 py-10">

      {/* 🔥 HERO SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Smart Shopping <br />
            Made <span className="text-blue-600">Effortless</span>
          </h1>

          <p className="text-gray-600 mb-6 text-lg">
            Discover AI-powered recommendations tailored to your needs.
            Find the perfect products instantly.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mb-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Browse Products
            </button>
          </div>

          {/* 🔥 STATS */}
          <div className="flex gap-10 mt-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-blue-600">5K+</h2>
              <p className="text-sm">Happy Users</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-purple-600">2K+</h2>
              <p className="text-sm">Products</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="hero"
            className="rounded-3xl shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-500">Special Offer</p>
            <h3 className="text-blue-600 font-bold">20% OFF</h3>
          </div>
        </div>
      </div>

      {/* 🔍 SEARCH */}
      <div className="mt-16 max-w-3xl mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-6 text-gray-500 animate-pulse">
          Finding best products...
        </p>
      )}

      {/* RESULTS */}
      {results.length > 0 && (
        <div className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            🔥 Recommended Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((item, index) => (
              <ProductCard key={index} product={item.product} />
            ))}
          </div>
        </div>
      )}

      {/* FEATURES */}
      <div className="mt-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          {
            title: "⚡ Fast AI Search",
            desc: "Instant product discovery"
          },
          {
            title: "🎯 Smart Recommendations",
            desc: "Based on your needs"
          },
          {
            title: "💰 Best Deals",
            desc: "Top curated products"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;