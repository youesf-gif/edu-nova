import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProfileTopNav() {
  const { currentUser } = useAuth();

  return (
    <nav className="profile-topnav">
      <div className="d-flex justify-content-between align-items-center w-100 px-gutter max-w-container-max mx-auto h-100">
        {/* Left: logo + nav links */}
        <div className="d-flex align-items-center gap-8">
          <Link to="/" className="text-headline-md font-headline-md font-bold text-secondary text-decoration-none">
            EduNova
          </Link>
          <div className="d-none d-lg-flex gap-6">
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover-text-secondary transition-colors cursor-pointer text-decoration-none"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Right: action buttons + avatar */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-3">
            <button className="p-2 text-on-surface-variant hover-bg-surface-container-low rounded-full transition-all cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover-bg-surface-container-low rounded-full transition-all cursor-pointer">
              <span className="material-symbols-outlined">help</span>
            </button>
            <Link to="/profile" className="app-avatar-container active-opacity-80">
              <img
                src={currentUser?.avatar}
                alt="User avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProfileTopNav;

