import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate(); // ✅ create navigator

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-2">

      {/* Image */}
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product?.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {product?.description}
        </p>

        {/* ✅ FIXED BUTTON */}
        <button
          onClick={() => navigate(`/product/${product._id}`, { state: product })}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;