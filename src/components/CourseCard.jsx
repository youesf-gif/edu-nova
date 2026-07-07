import React from "react";

function CourseCard({ course }) {
    // Helper to render rating stars dynamically
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined star-icon filled"
                    >
                        star
                    </span>,
                );
            } else if (i === Math.ceil(rating) && rating % 1 >= 0.9) {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined star-icon filled"
                    >
                        star
                    </span>,
                );
            } else if (i === Math.ceil(rating) && rating % 1 >= 0.4) {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined star-icon"
                    >
                        star_half
                    </span>,
                );
            } else {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined star-icon"
                    >
                        star
                    </span>,
                );
            }
        }
        return stars;
    };

    return (
        <div className="course-card group">
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
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="course-title line-clamp-2 mb-0 pe-2">
                        {course.title}
                    </h4>
                    <span className="course-price text-secondary text-nowrap">
                        {course.price}
                    </span>
                </div>
                <p className="course-author mb-2">{course.author}</p>
                <div className="course-rating mt-auto mb-3">
                    <span className="text-secondary font-bold text-label-md me-1">
                        {course.rating}
                    </span>
                    <div className="stars me-2">
                        {renderStars(course.rating)}
                    </div>
                    <span className="reviews-count">({course.reviews})</span>
                </div>
                <div className="course-footer pt-3 border-top border-outline-variant/30">
                    <button type="button" className="btn btn-view-details w-100">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
