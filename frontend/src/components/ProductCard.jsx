import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg border border-transparent dark:border-gray-700 hover:border-blue-500 transition-colors overflow-hidden group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product?.category && (
          <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 text-xs font-semibold px-3 py-1 rounded-full shadow text-blue-600">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-1 flex-1">
            {product?.name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {product?.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t dark:border-gray-700">
          <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
            ${product?.price?.toFixed(2) || "99.00"}
          </span>
          <button
            onClick={() => navigate(`/product/${product._id}`, { state: product })}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;