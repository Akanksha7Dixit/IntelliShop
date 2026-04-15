import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, ShoppingCart, User, LogOut } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.nav 
      initial="hidden" 
      animate="visible" 
      variants={navVariants}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <ShoppingBag className="text-blue-600 group-hover:rotate-12 transition-transform" size={28} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:opacity-80 transition">
            IntelliShop
          </h1>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600 dark:text-gray-200 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-600 dark:text-gray-200 transition">Products</Link>
          <Link to="/about" className="hover:text-blue-600 dark:text-gray-200 transition">About</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <Link to="/cart" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 transition group items-center flex">
            <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse transition">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </Link>

          {/* User / Login */}
          {user ? (
            <div className="flex items-center gap-4 relative group cursor-pointer">
              <span className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <User size={20} /> {user.name}
              </span>
              <div className="absolute top-10 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-48 border dark:border-gray-700">
                <Link to="/orderhistory" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition">Orders</Link>
                <div onClick={handleLogout} className="block px-4 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition cursor-pointer">
                  <LogOut size={16} /> Logout
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:![transform:scale(1.05)] transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;