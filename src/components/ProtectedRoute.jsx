import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(false);
  }, [user]);
  console.log(user);
  if (loading) return <div className="text-white">Loading...</div>;
  return user ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
