import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, authLoading } = useAuth();

  if (authLoading) return <p>Loading...</p>;

  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
