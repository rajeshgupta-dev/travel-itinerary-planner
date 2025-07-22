import React, { useState } from "react";
import { Link } from "react-router-dom";
import useButton from "../hooks/useButton";
import { useAuth } from "../context/AuthContext";

const countryStateData = {
  India: ["Delhi", "Maharashtra", "Tamil Nadu", "Karnataka", "Uttar Pradesh"],
  "United States": ["California", "Texas", "New York", "Florida"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
  Australia: ["New South Wales", "Victoria", "Queensland"],
  "United Kingdom": ["England", "Scotland", "Wales"],
};

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
    password: "",
    age: "",
    state: "",
    country: "",
  });

  const { signUp } = useAuth();
  const { buttonText, isLoading, handleClick } = useButton({
    initialText: "Sign Up",
    loadingText: "Creating...",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
      ...(name === "country" && { state: "" }),
    }));
  };

  const selectedCountryStates = countryStateData[formData.country] || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    await handleClick(async () => {
      // firebase signup method
      await signUp(
        formData.email,
        formData.password,
        formData.name,
        formData.image ? URL.createObjectURL(formData.image) : ""
      );
      console.log("Submitting form...");
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create Your Travel Account
        </h2>
        {/* Name */}
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring  focus:ring-blue-400"
          />
        </div>
        {/* Image Upload */}
        <div>
          <label className="block text-gray-600 mb-1">Profile Picture</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Choose a strong password"
          />
        </div>
        {/* Age */}
        <div>
          <label className="block text-gray-600 mb-1">Age</label>
          <input
            type="number"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your age"
          />
        </div>

        {/* Country Dropdown */}
        <div>
          <label className="block mb-1">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Country</option>
            {Object.keys(countryStateData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        {formData.country && (
          <div className="mt-4">
            <label className="block mb-1">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select State</option>
              {selectedCountryStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {buttonText}
        </button>

        <div className="text-center ">
          <p className="pr-3.5">
            Already have account?
            <Link
              to={"/login"}
              className="p-1 underline  hover:text-blue-700  text-blue-500 active:text-red-500"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
