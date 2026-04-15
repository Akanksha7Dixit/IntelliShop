import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const Cart = () => {
    const { cartItems, removeFromCart, updateQty } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 dark:text-white">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Your cart is empty.</p>
                    <Link to="/products" className="text-blue-500 hover:underline">Go Back</Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <motion.div 
                                key={item.product}
                                layout
                                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div>
                                        <Link to={`/product/${item.product}`} className="font-semibold text-lg hover:text-blue-500 dark:text-white">{item.name}</Link>
                                        <p className="text-gray-500">Rs. {Number(item.price).toLocaleString("en-IN")}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <select 
                                        value={item.qty} 
                                        onChange={(e) => updateQty(item.product, Number(e.target.value))}
                                        className="bg-gray-100 dark:bg-gray-700 dark:text-white border-0 rounded-md p-2"
                                    >
                                        {[...Array(10).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                    <button 
                                        onClick={() => removeFromCart(item.product)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm h-fit">
                        <h2 className="text-xl font-bold mb-4 dark:text-white">Order Summary</h2>
                        <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-300">
                            <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items):</span>
                            <span className="font-bold">Rs. {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toLocaleString("en-IN")}</span>
                        </div>
                        <button 
                            disabled={cartItems.length === 0} 
                            onClick={checkoutHandler}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
