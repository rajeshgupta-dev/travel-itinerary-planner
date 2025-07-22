import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { isDark, setIsDark } = useTheme();

  const userName = user?.email?.split("@")[0];

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    setMenuOpen(false);
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "block text-inherit hover:text-blue-500 transition";

  const themeClasses = isDark
    ? "bg-[#111827] text-[#f3f4f6]"
    : "bg-[#f9fafb] text-[#1f2937]";

  return (
    <nav className={`${themeClasses} shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink className="text-xl font-bold text-blue-600 dark:text-blue-400">
          🧭 Travel Planner
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <>
              <NavLink to="/dashboard" className={navLinkStyle}>
                Dashboard
              </NavLink>
              <NavLink to="/itinerary" className={navLinkStyle}>
                Plan Itinerary
              </NavLink>
              <NavLink to="/my-itinerary" className={navLinkStyle}>
                My Itinerary
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline transition"
              >
                Logout
              </button>
              <span className="text-sm text-gray-500 ml-2">{userName}</span>
            </>
          ) : (
            <NavLink to="/login" className={navLinkStyle}>
              Login
            </NavLink>
          )}

          <button
            onClick={() => setIsDark(!isDark)}
            className="text-yellow-500 text-xl"
            title="Toggle Theme"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-inherit"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden ${themeClasses} px-4 pb-4 space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {user ? (
          <>
            <NavLink
              to="/dashboard"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/itinerary"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Plan Itinerary
            </NavLink>
            <NavLink
              to="/my-itinerary"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              My Itinerary
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-red-500 block hover:underline"
            >
              Logout
            </button>
            <p className="text-sm text-gray-400">Hi, {userName}</p>
          </>
        ) : (
          <NavLink
            to="/login"
            className={navLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
        )}
        <button
          onClick={() => setIsDark(!isDark)}
          className="block text-yellow-500 mt-2"
        >
          {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
