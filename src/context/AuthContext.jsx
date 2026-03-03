import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/axios"; // ✅ USE CENTRAL AXIOS

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Auto-login using HttpOnly cookie
  useEffect(() => {
    api
      .get("/api/user/profile")
      .then((res) => {
        setUser({ id: res.data.userId });
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🚪 LOGOUT (cookie-based)
  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
    } catch (err) {
      // even if request fails, still logout locally
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);