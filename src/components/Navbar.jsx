import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = {
  "/": "Home",
  "/projects": "Projects",
  "/filmography": "Filmography",
  "/about": "About",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const pageName = navItems[pathname] || "Home";
    document.title = `${pageName} - Yvone Cortes`;
  }, [pathname]);

  const linkStyles = ({ isActive }) =>
    isActive
      ? "py-2 px-4 text-center border border-white rounded-md text-white transition-colors block md:inline-block"
      : "py-2 px-4 text-center text-zinc-300 hover:text-white transition-colors block md:inline-block";

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-zinc-700 text-white">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            className="object-cover h-8 md:h-10"
            src="/icons/YCVisuals.png"
            alt="Logo"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {Object.entries(navItems).map(([path, name]) => (
            <NavLink key={path} to={path} className={linkStyles}>
              {name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-zinc-800"
            : "grid-rows-[0fr] opacity-0 border-t border-transparent pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 bg-black flex flex-col gap-2">
            {Object.entries(navItems).map(([path, name]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={linkStyles}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
