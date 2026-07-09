import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar({ activeTab = 'dashboard', setActiveTab = () => {}, user }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'courses', label: 'My Courses', icon: 'school' },
    { id: 'messages', label: 'Messages', icon: 'mail' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <aside className="d-none d-md-flex sidebar flex-column text-white">
      <div className="sidebar-header">
        <Link to="/" className="text-decoration-none">
          <h1 className="text-headline-md fw-bold tracking-tight text-secondary-fixed m-0">
            EduNova
          </h1>
        </Link>
      </div>
      <nav className="flex-grow-1 px-3 mt-3 d-flex flex-column gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-link border-0 w-100 text-start d-flex align-items-center ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
            style={{ background: 'none' }}
          >
            <span
              className="material-symbols-outlined"
              style={activeTab === item.id ? { fontVariationSettings: '"FILL" 1' } : {}}
            >
              {item.icon}
            </span>
            <span className="text-label-md">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-3 border-white-5">
        <div className="sidebar-user-card position-relative d-flex align-items-center gap-3 p-3 bg-white-5 rounded-4">
          <Link
            to="/profile"
            className="d-flex align-items-center gap-3 flex-grow-1 min-w-0 text-decoration-none stretched-link"
          >
            <img
              className="avatar-img"
              alt={user?.avatarAlt}
              src={user?.avatarUrl}
            />
            <div className="flex-grow-1 min-w-0">
              <p className="text-label-md text-white text-truncate m-0">
                {user?.name}
              </p>
              <p className="text-role">
                {user?.role}
              </p>
            </div>
          </Link>
          <button 
            className="material-symbols-outlined btn-logout position-relative z-1"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              logout();
              navigate("/");
            }}
          >
            logout
          </button>
        </div>
      </div>
    </aside>
  );
}

