function ProductCard({ product, score }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      {/* Image */}
      <img
        src={
          product?.image ||
          "https://via.placeholder.com/300x200?text=No+Image"
        }
        alt={product?.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {product?.name}
        </h3>

        <p className="text-gray-600 mb-3 text-sm">
          {product?.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            Score: {score?.toFixed(2)}
          </span>

          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;