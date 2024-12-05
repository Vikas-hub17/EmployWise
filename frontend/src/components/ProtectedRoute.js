import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute Component
 * Ensures that only authenticated users can access the children routes.
 * Redirects to the login page if no valid token is found.
 *
 * @param {React.ReactNode} children - The child components to render if authenticated.
 * @returns {React.ReactNode} - The children or a redirect to the login page.
 */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Check if token exists
  if (!token) {
    return <Navigate to="/" />;
  }

  // Render the protected content if authenticated
  return children;
};

export default ProtectedRoute;
