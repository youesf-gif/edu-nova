import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="app-header">
      <nav className="container-max nav-wrapper">
        <div className="d-flex align-items-center gap-4">
          <a className="logo" href="index.html">EduNova</a>
          <div className="desktop-nav-links">
            <a className="nav-link active" href="index.html">Home</a>
            <a className="nav-link" href="#">All Courses</a>
          </div>
        </div>
        <div className="desktop-auth-buttons">
          <a className="btn-login text-decoration-none d-inline-flex align-items-center justify-content-center" href="login.html">Login</a>
          <a className="btn-signup text-decoration-none d-inline-flex align-items-center justify-content-center" href="registration.html">Sign Up</a>
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
          <a className="mobile-link active" href="index.html">Home</a>
          <a className="mobile-link" href="#">All Courses</a>
          <hr className="mobile-divider" />
          <a className="btn-mobile-login text-decoration-none text-center" href="login.html">Login</a>
          <a className="btn-mobile-signup text-decoration-none text-center" href="registration.html">Sign Up</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
