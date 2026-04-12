import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/products/recommend",
        { query }
      );
      setResults(res.data);
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        AI Recommendation System
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          className="p-3 border rounded w-80 shadow-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
        />

        <button
          onClick={search}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((r, i) => (
          <div key={i} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{r.product.title}</h3>
            <p>{r.product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;