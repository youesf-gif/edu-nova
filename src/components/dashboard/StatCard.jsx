import React from 'react';

export default function StatCard({ label, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrapper">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-label-md text-on-surface-variant m-0">
          {label}
        </p>
        <p className="text-headline-md text-primary m-0">{value}</p>
      </div>
    </div>
  );
}
