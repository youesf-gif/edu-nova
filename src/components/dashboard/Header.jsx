import React from 'react';

export default function Header({ userName, lessonsCount, searchQuery = '', setSearchQuery = () => {} }) {
  return (
    <header className="top-app-bar px-3 px-md-4 py-3 d-flex justify-content-between align-items-center">
      <div>
        <h2 className="text-headline-md text-primary m-0">
          Welcome back, {userName}!
        </h2>
        <p className="text-sm-body m-0">
          You have {lessonsCount} lesson{lessonsCount !== 1 ? 's' : ''} to complete today.
        </p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative d-none d-sm-block">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            className="search-input"
            placeholder="Search courses..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="btn-notification" onClick={() => alert('No new notifications')}>
          <span className="material-symbols-outlined">notifications</span>
          <span className="badge-dot"></span>
        </button>
      </div>
    </header>
  );
}
