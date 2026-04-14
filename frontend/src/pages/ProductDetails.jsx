import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Use state first (fast), fallback to API
  const [product, setProduct] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await getProductById(id);
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

  if (loading) {
    return (
      <>
        <p className="text-center mt-20 text-gray-500 animate-pulse">
          Loading product...
        </p>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <p className="text-center mt-20 text-red-500">
          Product not found ❌
        </p>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-6 py-10">

        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 grid md:grid-cols-2 gap-10">

          {/* IMAGE SECTION */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />

            {/* Optional thumbnails */}
            <div className="flex gap-3 mt-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-col justify-between">

            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>

              <p className="text-gray-500 mb-4">
                {product.description}
              </p>

              {/* ⭐ Rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="ml-2 text-gray-500">(4.5)</span>
              </div>

              {/* 💰 Price (static for now) */}
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                ₹89,999
              </h2>

              {/* ✅ Features */}
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✔ High Performance</li>
                <li>✔ Premium Build Quality</li>
                <li>✔ Long Battery Life</li>
              </ul>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
                🛒 Add to Cart
              </button>

              <button
                onClick={() => navigate(-1)}
                className="flex-1 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                ← Go Back
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;