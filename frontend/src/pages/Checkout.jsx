import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { motion } from "framer-motion";

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("Credit Card");

    useEffect(() => {
        if (!user) {
            navigate("/login?redirect=checkout");
        }
    }, [user, navigate]);

    const placeOrderHandler = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

            await axios.post("/api/orders", {
                orderItems: cartItems,
                paymentMethod,
                totalPrice,
            }, config);

            clearCart();
            navigate("/orderhistory");
        } catch (error) {
            console.error(error);
            alert("Order failed!");
        }
    };

    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-6 dark:text-white">Checkout</h1>
                    
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Payment Method</h2>
                        <div className="flex gap-4">
                            {["Credit Card", "PayPal", "Apple Pay"].map(method => (
                                <label key={method} className="flex items-center gap-2 cursor-pointer dark:text-gray-300">
                                    <input 
                                        type="radio" 
                                        value={method} 
                                        checked={paymentMethod === method}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="form-radio text-blue-600"
                                    />
                                    {method}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Order Items</h2>
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {cartItems.map((item, index) => (
                                <li key={index} className="py-4 flex justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                        <span className="dark:text-white">{item.name}</span>
                                    </div>
                                    <span className="dark:text-gray-300">{item.qty} x ${item.price.toFixed(2)} = ${(item.qty * item.price).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t dark:border-gray-700 pt-6">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xl font-bold dark:text-white">Total:</span>
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button 
                            onClick={placeOrderHandler}
                            disabled={cartItems.length === 0}
                            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Checkout;
