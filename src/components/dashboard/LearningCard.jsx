import React from 'react';

export default function LearningCard({ course, onContinue = () => {} }) {
  const { title, image, imageAlt, moduleInfo, progress } = course;

  return (
    <div className="learning-card h-100 d-flex flex-column">
      <div className="learning-img-wrapper">
        <img
          className="learning-img"
          alt={imageAlt}
          src={image}
        />
        <div className="learning-badge">
          {moduleInfo}
        </div>
      </div>
      <div className="p-4 d-flex flex-column gap-3 flex-grow-1 justify-content-between">
        <div>
          <h4 className="text-headline-md fs-5 text-primary line-clamp-1 mb-3">
            {title}
          </h4>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between text-label-sm">
              <span className="text-on-surface-variant">Progress</span>
              <span className="text-secondary fw-bold">{progress}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
        <button className="btn-continue" onClick={() => onContinue(course.id)}>
          <span>Continue Lesson</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
