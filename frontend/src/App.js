import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

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

        <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Dummy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">iPhone 15</h3>
          <p>Apple smartphone with great camera</p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Samsung Galaxy</h3>
          <p>Android phone with powerful performance</p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">MacBook Air</h3>
          <p>Lightweight laptop for developers</p>
        </div>
      </div>
    </div>
  );
}

export default App;