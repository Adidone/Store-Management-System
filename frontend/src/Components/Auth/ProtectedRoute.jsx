import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Corrected import

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');

  // 1. Check if the user is logged in (token exists)
  if (!token) {
    // If not logged in, redirect to the login page
    return <Navigate to="/user-login" replace />;
  }

  try {
    // 2. Decode the token to get user information (including role and expiration)
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    const isTokenExpired = decodedToken.exp * 1000 < Date.now();

    // 3. Check if the token is expired
    if (isTokenExpired) {
      localStorage.clear(); // Clear expired token from storage
      return <Navigate to="/user-login" replace />;
    }

    // 4. Check if the user's role is allowed to access this route
    if (!allowedRoles.includes(userRole)) {
      // If role is not allowed, you can redirect to a "not authorized" page or home
      // For simplicity, we'll redirect to the home page.
      alert("You are not authorized to view this page.");
      return <Navigate to="/" replace />;
    }

  } catch (error) {
    // If token is invalid or decoding fails, clear storage and redirect
    localStorage.clear();
    return <Navigate to="/user-login" replace />;
  }


  // 5. If all checks pass, render the component
  return children;
};

export default ProtectedRoute;