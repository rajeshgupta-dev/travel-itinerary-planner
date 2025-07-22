import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useButton from "../hooks/useButton";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const { buttonText, isLoading, handleClick } = useButton({
    initialText: "Login",
    loadingText: "Login...",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Form Submitted:", formData);

    await handleClick(async () => {
      try {
        await login(formData.email, formData.password);
        console.log("User logged in");

        navigate("/dashboard");
        // window.location.href="/dashboard";
      } catch (error) {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-gray-600">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Remember me</span>
          </label>

          <Link
            to="#"
            className="text-blue-500 hover:underline active:text-red-500"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 active:bg-red-500 cursor-pointer ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {buttonText}
        </button>

        {/* Signup Link */}
        <div className="text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline hover:text-blue-700 active:text-red-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
