import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  const textSecondary = isDark ? "text-gray-400" : "text-gray-500";
  const linkHover = isDark ? "hover:text-white" : "hover:text-blue-600";

  return (
    <footer
      className={`${
        isDark ? "bg-[#111827]" : "bg-[#f9fafb]"
      } py-10 px-6 md:px-20 transition-colors duration-300 `}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-400">
            Travel Planner
          </h2>
          <p className={`text-sm ${textSecondary}`}>
            Your one-stop platform for organizing dream vacations with ease.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-300">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`${textSecondary} ${linkHover} transition`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Destinations
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-300">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Legal + Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-300">
            Legal & Social
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                Terms of Use
              </a>
            </li>
            <li className="flex space-x-4 mt-3">
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                🌐
              </a>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                🐦
              </a>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                📘
              </a>
              <a
                href="#"
                className={`${textSecondary} ${linkHover} transition`}
              >
                📸
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`border-t ${
          isDark ? "border-gray-700" : "border-gray-300"
        } mt-10 pt-4 text-center text-sm ${textSecondary}`}
      >
        © {new Date().getFullYear()} Travel Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
