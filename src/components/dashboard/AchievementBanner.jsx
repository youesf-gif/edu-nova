import React from 'react';

export default function AchievementBanner({ joined = false, onJoin = () => {} }) {
  return (
    <div className="achievement-banner">
      <div className="position-relative z-1 d-flex flex-column flex-md-row align-items-center gap-4">
        <div className="flex-grow-1">
          <h4 className="text-headline-md text-white mb-2">
            Weekend Challenge: Master CSS Grid
          </h4>
          <p className="text-on-primary-container text-body-md mb-4">
            {joined 
              ? "You've successfully joined the challenge! Complete lessons before Sunday to claim your badge." 
              : "Complete the challenge before Sunday to earn a 'Layout Pro' badge and 500 bonus points."}
          </p>
          <button 
            className="btn-challenge" 
            onClick={onJoin}
            style={joined ? { backgroundColor: 'var(--surface-container-high)', color: 'var(--primary)' } : {}}
          >
            {joined ? 'Challenge Joined' : 'Join Challenge'}
          </button>
        </div>
        <div className="d-none d-md-flex achievement-icon-wrapper">
          <span
            className="material-symbols-outlined text-6xl text-secondary-fixed"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            emoji_events
          </span>
        </div>
      </div>
    </div>
  );
}
