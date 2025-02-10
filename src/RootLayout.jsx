import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserCircle, Settings, LogOut, User, Menu, X } from "lucide-react";

const RootLayout = ({ children }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["Dashboard", "/dashboard"],
    ["Journal", "/journal"],
    ["Insights", "/insights"],
    ["Resources", "/resources"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  // Define active and default classes
  const activeClass = "text-blue-600 font-bold";
  const defaultClass = "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105";

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen relative">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Zenflow
              </NavLink>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(([name, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
            {/* Mobile & Profile Controls */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Menu className="w-6 h-6 text-blue-600" />
                  )}
                </button>
              </div>
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                >
                  <UserCircle className="w-6 h-6 text-blue-600" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 top-full w-48 bg-white rounded-xl shadow-lg py-2 border border-blue-100 transform transition-all duration-300 ease-out">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        Alex Johnson
                      </p>
                      <p className="text-xs text-gray-500">alex@example.com</p>
                    </div>
                    <NavLink
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </NavLink>
                    <NavLink
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </NavLink>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                      onClick={() => console.log("Logout")}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md border-t border-blue-100 animate-slideDown">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map(([name, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    "block px-3 py-2 rounded-md " +
                    (isActive
                      ? activeClass
                      : "text-gray-700 hover:bg-blue-50 transition-all duration-200")
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300">
        {children}
      </main>
      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RootLayout;
