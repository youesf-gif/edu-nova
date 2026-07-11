import React, { useState } from "react";

export default function HomeCourseCard({ course, onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div 
      className="course-card group" 
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="course-img-wrapper">
        <img 
          className="course-img" 
          src={course.imgSrc} 
          alt={course.imgAlt}
        />
        {course.badge && (
          <span className="badge-bestseller">{course.badge}</span>
        )}
      </div>
      <div className="course-body">
        <h4 className="course-title">{course.title}</h4>
        <p className="course-author">
          By {course.author} • {course.authorRole}
        </p>
        <div className="course-rating">
          <div className="stars">
            <span className="material-symbols-outlined star-icon filled">star</span>
            <span className="material-symbols-outlined star-icon filled">star</span>
            <span className="material-symbols-outlined star-icon filled">star</span>
            <span className="material-symbols-outlined star-icon filled">star</span>
            <span className="material-symbols-outlined star-icon filled">star</span>
          </div>
          <span className="reviews-count">({course.reviews})</span>
        </div>
        <div className="course-footer">
          <span className="course-price">{course.price}</span>
          <button 
            className={`btn-enroll ${isPressed ? "scale-95" : ""}`}
            onMouseDown={(e) => {
              e.stopPropagation();
              setIsPressed(true);
            }}
            onMouseUp={(e) => {
              e.stopPropagation();
              setIsPressed(false);
            }}
            onMouseLeave={() => setIsPressed(false)}
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick();
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
