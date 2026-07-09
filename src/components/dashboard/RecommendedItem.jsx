import React from 'react';

export function RecommendedItem({ rec, onEnroll = () => {} }) {
  const { title, image, imageAlt, rating } = rec;
  return (
    <div className="rec-item">
      <div className="rec-img-wrapper">
        <img
          className="rec-img"
          alt={imageAlt}
          src={image}
        />
      </div>
      <p className="text-label-md text-primary rec-title m-0 fw-bold">
        {title}
      </p>
      <div className="d-flex justify-content-between align-items-center mt-1">
        <div className="d-flex text-secondary text-sm">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-16px"
              style={{ fontVariationSettings: i < rating ? '"FILL" 1' : '"FILL" 0' }}
            >
              star
            </span>
          ))}
        </div>
        <button 
          className="btn border-0 p-0 text-secondary hover-underline text-xs fw-bold"
          onClick={(e) => {
            e.preventDefault();
            onEnroll(rec);
          }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default function RecommendedWidget({ recommendations = [], onEnroll = () => {} }) {
  return (
    <div className="widget-box">
      <h4 className="text-headline-md fs-5 text-primary mb-4">
        Recommended for You
      </h4>
      <div className="d-flex flex-column gap-4">
        {recommendations.map((rec) => (
          <RecommendedItem
            key={rec.id}
            rec={rec}
            onEnroll={onEnroll}
          />
        ))}
      </div>
    </div>
  );
}
