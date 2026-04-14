import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <div className="flex justify-center mb-8 shadow-lg rounded-full overflow-hidden w-[60%] mx-auto">
      
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 px-6 py-3 outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 font-semibold hover:opacity-90 transition"
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;