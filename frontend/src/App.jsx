import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import { getRecommendations } from "./services/api";

function App() {
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
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        🤖 AI Product Recommendation
      </h1>

      {/* Search */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {results.length === 0 && !loading && (
          <p className="text-center col-span-3 text-gray-500">
            No results found. Try searching something.
          </p>
        )}

        {results.map((item, index) => (
          <ProductCard
            key={index}
            product={item.product}
            score={item.score}
          />
        ))}
      </div>

    </div>
  );
}

export default App;