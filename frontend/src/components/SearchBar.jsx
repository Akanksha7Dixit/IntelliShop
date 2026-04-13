import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query) return alert("Enter something");
    onSearch(query); // ✅ correct
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-3 w-80 rounded-l-lg border outline-none"
      />

      <button
        onClick={handleSearch} // ✅ FIXED
        className="bg-blue-500 text-white px-5 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;