import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactElement;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" replace />;
}
