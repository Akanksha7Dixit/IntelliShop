import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

// Setup Axios Base URL
axios.defaults.baseURL = "http://localhost:5000";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    const login = async (email, password) => {
        const { data } = await axios.post("/api/auth/login", { email, password });
        setUser(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        return data;
    };

    const register = async (name, email, password) => {
        const { data } = await axios.post("/api/auth/register", { name, email, password });
        setUser(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        return data;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("userInfo");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
