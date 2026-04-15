import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user) return;
            try {
                const config = {
                    headers: { Authorization: `Bearer ${user.token}` }
                };
                const { data } = await axios.get("/api/orders/myorders", config);
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchOrders();
    }, [user]);

    if (!user) {
        return <div className="text-center mt-20 dark:text-white">Please login to view your orders.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 dark:text-white">My Orders</h1>
            {orders.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 p-8 text-center rounded-xl shadow-sm">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">You have no orders yet.</p>
                    <Link to="/products" className="text-blue-600 hover:underline">Start Shopping</Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <motion.div 
                            key={order._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                        >
                            <div className="flex justify-between border-b dark:border-gray-700 pb-4 mb-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Order Placed</p>
                                    <p className="font-semibold dark:text-gray-200">{new Date(order.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Total</p>
                                    <p className="font-semibold dark:text-gray-200">${order.totalPrice.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Order ID</p>
                                    <p className="font-semibold dark:text-gray-200">{order._id}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                                        <div>
                                            <p className="font-medium dark:text-white">{item.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistory;
