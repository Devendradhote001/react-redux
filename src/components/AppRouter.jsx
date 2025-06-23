import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Login";
import Register from "./Register";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
