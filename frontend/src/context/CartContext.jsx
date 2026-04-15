import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = localStorage.getItem("cartItems");
        if (items) {
            setCartItems(JSON.parse(items));
        }
    }, []);

    const addToCart = (product, qty) => {
        const existItem = cartItems.find((x) => x.product === product._id);

        let newCartItems;
        if (existItem) {
            newCartItems = cartItems.map((x) =>
                x.product === existItem.product ? { ...x, qty: x.qty + qty } : x
            );
        } else {
            newCartItems = [...cartItems, { 
                product: product._id, 
                name: product.name, 
                image: product.image, 
                price: product.price, 
                qty 
            }];
        }
        
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };

    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter((x) => x.product !== id);
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };

    const updateQty = (id, qty) => {
        const newCartItems = cartItems.map((x) =>
            x.product === id ? { ...x, qty } : x
        );
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
