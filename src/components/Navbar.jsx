import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ minimal = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="app-header">
      {minimal ? (
        <div className="d-flex justify-content-between align-items-center w-100 px-gutter max-w-container-max mx-auto h-100">
          <div className="d-flex align-items-center gap-8">
            <Link className="font-headline-md fw-bold text-primary cursor-pointer text-decoration-none" to="/">EduNova</Link>
            <nav className="d-none d-md-flex gap-6 align-items-center">
              <Link className="font-body-md text-on-surface-variant hover-text-secondary transition-colors cursor-pointer text-decoration-none" to="/">Home</Link>
              <a className="font-body-md text-on-surface-variant hover-text-secondary transition-colors cursor-pointer text-decoration-none" href="#">All Courses</a>
            </nav>
          </div>
        </div>
      ) : (
        <>
          <nav className="container-max nav-wrapper">
            <div className="d-flex align-items-center gap-4">
              <Link className="logo" to="/">EduNova</Link>
              <div className="desktop-nav-links">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/">Home</NavLink>
                <a className="nav-link" href="#">All Courses</a>
              </div>
            </div>
            <div className="desktop-auth-buttons">
              <Link className="btn-login text-decoration-none d-inline-flex align-items-center justify-content-center" to="/login">Login</Link>
              <Link className="btn-signup text-decoration-none d-inline-flex align-items-center justify-content-center" to="/register">Sign Up</Link>
            </div>
            {/* Mobile Menu Toggle Button */}
            <button 
              className="mobile-toggle-btn" 
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </nav>

          {/* Mobile Menu Drawer (Hidden by default) */}
          <div 
            className={`mobile-menu-drawer z-index-mobile-menu ${isOpen ? "" : "d-none"}`} 
            id="mobile-menu"
          >
            <div className="mobile-menu-inner">
              <NavLink className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`} to="/">Home</NavLink>
              <a className="mobile-link" href="#">All Courses</a>
              <hr className="mobile-divider" />
              <Link className="btn-mobile-login text-decoration-none text-center" to="/login">Login</Link>
              <Link className="btn-mobile-signup text-decoration-none text-center" to="/register">Sign Up</Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
