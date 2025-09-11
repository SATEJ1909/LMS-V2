import { motion } from "framer-motion";
import { Sun, Moon, User } from "lucide-react";
import { useState, useEffect } from "react";

// Navbar component designed to work even if your app is NOT wrapped in a Router.
// It avoids `useNavigate` / `Link` so it won't throw "useNavigate() may be used only in the context of a <Router>".

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  // toggle a `dark` class on <html> so Tailwind's dark: utilities work if you use them
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (darkMode) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Fallback navigation that works without react-router. If you wrap your app in
  // BrowserRouter later, you can replace this with useNavigate()/Link for client-side nav.
  const goTo = (path: string) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  };

  return (
    <motion.nav
      role="navigation"
      data-testid="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - plain anchor so it works without a Router */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-wider text-white"
          aria-label="EasyLearn home"
        >
          EasyLearn
        </a>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <a
                href="/login"
                data-testid="login-link"
                className="text-white font-medium hover:text-gray-300 transition"
                aria-label="Login"
              >
                Login
              </a>

            </>
          ) : (
            <motion.button
              data-testid="profile-btn"
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
              onClick={() => goTo("/profile")}
              aria-label="Profile"
            >
              <User className="w-5 h-5 text-white" />
            </motion.button>
          )}

          {/* Theme Toggle */}
          <motion.button
            data-testid="theme-toggle"
            whileTap={{ rotate: 90, scale: 0.92 }}
            onClick={() => setDarkMode((s) => !s)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-white" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
