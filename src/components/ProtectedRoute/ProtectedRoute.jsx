import { Navigate,useLocation } from "react-router-dom";
import React from "react";

function ProtectedRoute({  children,anonymouse = false,isLoggedIn },) {
  const location = useLocation();
  const from = location.state?.from || "/";
  

  if (anonymouse && isLoggedIn) {
    return <Navigate to={from} />;
  }

   
  if (!anonymouse && !isLoggedIn) {
    
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;