import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { motion } from "framer-motion";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`/api/products/${id}`);
          setProduct(res.data);
        } catch (err) {
          console.error("Error fetching product:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, product]);

  const addToCartHandler = () => {
    addToCart(product, qty);
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 animate-pulse text-xl">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-500 text-2xl mb-4">Product not found ❌</p>
        <button onClick={() => navigate("/")} className="text-blue-500 hover:underline">Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 px-6 py-10 transition-colors flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.4 }}
        className="max-w-6xl w-full mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 lg:p-10 grid md:grid-cols-2 gap-10 border border-gray-100 dark:border-gray-700"
      >
        {/* IMAGE SECTION */}
        <div className="relative group">
          <motion.img
            layoutId={`image-${product._id}`}
            src={product.image}
            alt={product.name}
            className="w-full h-full min-h-[400px] object-cover rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 group-hover:shadow-2xl transition"
          />
          {product.category && (
            <span className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 text-blue-600 font-bold px-4 py-1 rounded-full shadow-md backdrop-blur">
              {product.category}
            </span>
          )}
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-center py-4">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="flex items-center mb-8 bg-gray-50 dark:bg-gray-700/50 w-max px-4 py-2 rounded-xl">
              <span className="text-yellow-400 text-2xl tracking-widest">★★★★★</span>
              <span className="ml-3 text-gray-600 dark:text-gray-200 font-semibold">(4.8 Reviews)</span>
            </div>
            
            <div className="flex items-end gap-6 mb-8">
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                ${product.price?.toFixed(2) || "99.00"}
              </h2>
              {product.stock > 0 ? (
                 <span className="bg-green-100 text-green-700 font-bold px-4 py-1.5 rounded-lg text-sm mb-2 shadow-sm">In Stock ({product.stock})</span>
              ) : (
                 <span className="bg-red-100 text-red-700 font-bold px-4 py-1.5 rounded-lg text-sm mb-2 shadow-sm">Out of Stock</span>
              )}
            </div>
            
            {product.stock > 0 && (
                <div className="mb-10 flex items-center gap-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-inner w-max border dark:border-gray-600">
                  <span className="text-gray-700 dark:text-gray-200 font-semibold uppercase tracking-wider text-sm">Select Qty</span>
                  <select 
                    value={qty} 
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 font-bold outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {[...Array(product.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-auto">
            <button 
              onClick={addToCartHandler}
              disabled={product.stock === 0}
              className={`flex-[2] ${product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 shadow-xl hover:shadow-blue-500/30"} text-white font-bold text-lg px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2`}
            >
              🛒 {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 px-6 py-4 rounded-xl font-bold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetails;