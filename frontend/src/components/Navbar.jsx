
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <Code2 size={28} />
          <span>
            Amruta<span className="logo-accent">.</span>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          id="navbar-links"
          className={`navbar-links ${menuOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="/Amruta_Jadhav_Resume.pdf"
            className="navbar-resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
