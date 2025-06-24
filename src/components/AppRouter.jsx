import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Login";
import Register from "./Register";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <>
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
