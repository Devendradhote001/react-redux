import React, { lazy, Suspense } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../features/actions/userAction";
// import HomePage from "../pages/HomePage";
const HomePage = lazy(() => import("../pages/HomePage"));

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  

  const handleFormSubmit = (data) => {
    dispatch(loginAction(data));
    navigate("/home");
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to your account
        </h1>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            onClick={() => navigate("/register")}
            href="#"
            className="text-blue-600 hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
      <Suspense
        fallback={<div className="text-white">Loading component....</div>}
      >
        <HomePage />
      </Suspense>
      
    </div>
  );
};

export default Login;
