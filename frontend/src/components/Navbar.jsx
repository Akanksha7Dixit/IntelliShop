import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="text-blue-600" size={28} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            IntelliShop
          </h1>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/products">Products</Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <button className="relative hover:scale-110 transition">
            🛒
          </button>

          {/* Login */}
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
            Login
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;