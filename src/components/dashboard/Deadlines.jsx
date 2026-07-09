import React from 'react';

export function DeadlineItem({ deadline, onComplete = () => {} }) {
  const { title, detail, month, day, isUrgent } = deadline;
  return (
    <div className="deadline-item d-flex align-items-center justify-content-between p-2 rounded w-100">
      <div className="d-flex gap-3 align-items-start flex-grow-1">
        <div className={`date-badge ${isUrgent ? 'date-badge-error' : 'date-badge-normal'}`}>
          <span className="date-badge-month">{month}</span>
          <span className="date-badge-day">{day}</span>
        </div>
        <div className="flex-grow-1">
          <p className="text-label-md text-primary deadline-title m-0">
            {title}
          </p>
          <p className="text-xs text-on-surface-variant m-0">
            {detail}
          </p>
        </div>
      </div>
      <button 
        className="btn border-0 p-1 text-on-surface-variant hover-underline text-xs" 
        onClick={(e) => {
          e.preventDefault();
          onComplete(deadline.id);
        }}
        title="Mark complete"
      >
        Done
      </button>
    </div>
  );
}

export default function UpcomingDeadlines({ deadlines = [], onCompleteDeadline = () => {} }) {
  return (
    <div className="widget-box">
      <h4 className="text-headline-md fs-5 text-primary mb-4">
        Upcoming Deadlines
      </h4>
      <div className="d-flex flex-column gap-3">
        {deadlines.length === 0 ? (
          <p className="text-sm text-on-surface-variant m-0 p-2">All caught up! No deadlines left.</p>
        ) : (
          deadlines.map((deadline) => (
            <DeadlineItem
              key={deadline.id}
              deadline={deadline}
              onComplete={onCompleteDeadline}
            />
          ))
        )}
      </div>
      <button className="btn-widget-action" onClick={() => alert('Calendar view is not implemented.')}>
        View Calendar
      </button>
    </div>
  );
}
