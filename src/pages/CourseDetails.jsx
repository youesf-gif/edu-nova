import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { coursesData } from "../data/courses";
import { useAuth } from "../context/AuthContext";
import "../styles/course-details.css";

function CourseDetails() {
    const { id } = useParams();
    const { currentUser } = useAuth();
    const course = coursesData.find((c) => c.id === parseInt(id));
    const [activeModules, setActiveModules] = useState([1]);
    const isEnrolled = currentUser?.enrolledCourses?.some((enrollment) => enrollment.courseId === course?.id);

    const toggleAccordion = (moduleNumber) => {
        if (activeModules.includes(moduleNumber)) {
            setActiveModules(activeModules.filter((m) => m !== moduleNumber));
        } else {
            setActiveModules([...activeModules, moduleNumber]);
        }
    };

    // Helper to render rating stars dynamically
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                        star
                    </span>
                );
            } else if (i === Math.ceil(rating) && rating % 1 >= 0.9) {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                        star
                    </span>
                );
            } else if (i === Math.ceil(rating) && rating % 1 >= 0.4) {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined"
                    >
                        star_half
                    </span>
                );
            } else {
                stars.push(
                    <span
                        key={i}
                        className="material-symbols-outlined"
                    >
                        star
                    </span>
                );
            }
        }
        return stars;
    };

    if (!course) {
        return (
            <div className="bg-background text-on-surface font-body-md pt-navbar min-vh-100 d-flex flex-column">
                <Navbar />
                <main className="flex-grow-1 d-flex align-items-center justify-content-center py-16 px-gutter">
                    <div className="text-center space-y-6 max-w-sm mx-auto p-8 bg-surface-container-low rounded-2xl border border-outline-variant shadow-md">
                        <span className="material-symbols-outlined text-error" style={{ fontSize: "4rem" }}>
                            error
                        </span>
                        <h1 className="font-headline-md text-primary m-0">Course Not Found</h1>
                        <p className="text-on-surface-variant font-body-md m-0">
                            The course you are looking for does not exist or has been removed.
                        </p>
                        <Link to="/courses" className="btn btn-view-details px-6 py-2 rounded-pill font-label-md text-decoration-none d-inline-block">
                            Back to All Courses
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background text-on-surface font-body-md pt-navbar">
            {/* Top Navigation Bar */}
            <Navbar />
            {/* Page Header (Breadcrumbs & Course Intro) */}
            <section className="bg-primary-container py-12 py-lg-16 text-on-primary">
                <div className="max-w-container-max mx-auto px-gutter">
                    <div className="row g-12 align-items-center">
                        <div className="col-lg-8 space-y-6">
                            {/* Breadcrumbs */}
                            <nav className="d-flex align-items-center gap-2 font-label-md text-on-primary-container">
                                <Link
                                    className="hover-text-white text-decoration-none text-on-primary-container transition-colors"
                                    to="/"
                                >
                                    Home
                                </Link>
                                <span
                                    className="material-symbols-outlined text-[14px]"
                                    style={{ fontSize: 14 }}
                                >
                                    chevron_right
                                </span>
                                <Link
                                    className="hover-text-white text-decoration-none text-on-primary-container transition-colors"
                                    to="/courses"
                                >
                                    All Courses
                                </Link>
                                <span
                                    className="material-symbols-outlined text-[14px]"
                                    style={{ fontSize: 14 }}
                                >
                                    chevron_right
                                </span>
                                <span className="text-secondary-fixed">
                                    {course.category}
                                </span>
                            </nav>
                            {/* Course Title & Subtitle */}
                            <h1 className="font-headline-xl text-headline-xl text-white m-0">
                                {course.title}
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-primary-container max-w-3xl m-0">
                                {course.description}
                            </p>
                            {/* Stats Bar */}
                            <div className="d-flex flex-wrap align-items-center gap-6 pt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="text-secondary-fixed font-bold">
                                        {course.rating}
                                    </span>
                                    <div className="d-flex text-secondary-fixed">
                                        {renderStars(course.rating)}
                                    </div>
                                    <span className="text-on-primary-container font-label-sm">
                                        ({course.reviewsCountText})
                                    </span>
                                </div>
                                <div className="divider-vertical d-none d-sm-block" />
                                <div className="d-flex align-items-center gap-2">
                                    <span className="material-symbols-outlined text-on-primary-container">
                                        group
                                    </span>
                                    <span className="font-label-md text-white">
                                        {course.studentsCountText}
                                    </span>
                                </div>
                                <div className="divider-vertical d-none d-sm-block" />
                                <div className="d-flex align-items-center gap-2">
                                    <span className="material-symbols-outlined text-on-primary-container">
                                        schedule
                                    </span>
                                    <span className="font-label-md text-white">
                                        {course.durationText}
                                    </span>
                                </div>
                            </div>
                            {/* Instructor Info */}
                            <div className="d-flex align-items-center gap-3 pt-6">
                                <div className="w-12 h-12 rounded-circle overflow-hidden border border-2 border-secondary-fixed">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        alt={course.author}
                                        src={course.authorImg}
                                    />
                                </div>
                                <div>
                                    <p className="font-label-sm text-on-primary-container uppercase tracking-wider mb-1">
                                        Created by
                                    </p>
                                    <p className="font-label-md text-white mb-0">
                                        {course.author},{" "}
                                        <span className="text-on-primary-container">
                                            {course.authorRole}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Content Grid */}
            <main className="max-w-container-max mx-auto px-gutter py-12 py-lg-16">
                <div className="row g-12 align-items-start">
                    {/* Left Column: Content */}
                    <div className="col-lg-8 space-y-12">
                        {/* About Section */}
                        <section className="space-y-6" id="about">
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-0">
                                About this Course
                            </h2>
                            {course.about.map((p, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === 0
                                            ? "font-body-lg text-body-lg text-on-surface-variant mb-0"
                                            : "font-body-md text-on-surface-variant mb-0"
                                    }
                                >
                                    {p}
                                </p>
                            ))}
                        </section>
                        {/* What you will learn */}
                        <section
                            className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant-50"
                            id="outcomes"
                        >
                            <h2 className="font-headline-md text-headline-md text-primary mb-6">
                                What you will learn
                            </h2>
                            <div className="row row-cols-1 row-cols-sm-2 g-4">
                                {course.outcomes.map((outcome, index) => (
                                    <div key={index} className="col d-flex align-items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary">
                                            check_circle
                                        </span>
                                        <p className="font-body-md text-on-surface mb-0">
                                            {outcome}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* Curriculum */}
                        <section className="space-y-6" id="curriculum">
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-baseline gap-2">
                                <h2 className="font-headline-lg text-headline-lg text-primary mb-0">
                                    Curriculum
                                </h2>
                                <p className="font-label-md text-on-surface-variant mb-0">
                                    {course.curriculumMeta}
                                </p>
                            </div>
                            <div className="space-y-4">
                                {course.curriculum.map((module, mIndex) => {
                                    const moduleNum = mIndex + 1;
                                    const isActive = activeModules.includes(moduleNum);
                                    return (
                                        <div
                                            key={mIndex}
                                            className={`accordion-item ${isActive ? "active" : ""}`}
                                        >
                                            <button onClick={() => toggleAccordion(moduleNum)}>
                                                <div className="acc-left">
                                                    <span className="acc-number">
                                                        {module.number}
                                                    </span>
                                                    <div className="acc-title">
                                                        <h3>{module.title}</h3>
                                                        <p>{module.meta}</p>
                                                    </div>
                                                </div>
                                                <span className="material-symbols-outlined chevron-icon">
                                                    expand_more
                                                </span>
                                            </button>
                                            <div className="accordion-content">
                                                <div className="acc-body-inner">
                                                    {module.lessons ? (
                                                        module.lessons.map((lesson, lIndex) => (
                                                            <div key={lIndex} className="acc-lesson-row">
                                                                <div className="acc-lesson-left">
                                                                    <span className="material-symbols-outlined acc-lesson-icon">
                                                                        {lesson.type === "video"
                                                                            ? "play_circle"
                                                                            : "description"}
                                                                    </span>
                                                                    <span className="acc-lesson-name">
                                                                        {lesson.name}
                                                                    </span>
                                                                </div>
                                                                <span className="acc-lesson-duration">
                                                                    {lesson.duration}
                                                                </span>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p
                                                            style={{
                                                                fontSize: 16,
                                                                lineHeight: "1.5",
                                                                fontWeight: 400,
                                                                color: "var(--on-surface-variant)",
                                                                fontStyle: "italic",
                                                                margin: 0,
                                                            }}
                                                        >
                                                            {module.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Sidebar (Sticky CTA) */}
                    <aside className="col-lg-4 align-self-stretch">
                        <div className="enrollment-card">
                            {/* Preview Area: 16:9 ratio, group hover overlay */}
                            <div className="card-preview">
                                <img
                                    src={course.imgSrc}
                                    alt={course.imgAlt}
                                />
                                <div className="preview-overlay">
                                    <div className="preview-play">
                                        <span
                                            className="material-symbols-outlined text-primary"
                                            style={{
                                                fontSize: "2.25rem",
                                                fontVariationSettings:
                                                    '"FILL" 1',
                                            }}
                                        >
                                            play_arrow
                                        </span>
                                    </div>
                                </div>
                                <div className="preview-badge">
                                    Preview Course
                                </div>
                            </div>
                            {/* Card Body */}
                            <div className="card-body-inner">
                                {/* Price */}
                                <div className="d-flex align-items-baseline gap-2">
                                    <span className="font-headline-lg text-headline-lg text-primary">
                                        {course.price}
                                    </span>
                                    {course.oldPrice && (
                                        <span className="card-price-old">
                                            {course.oldPrice}
                                        </span>
                                    )}
                                    {course.discount && (
                                        <span className="card-price-badge">
                                            {course.discount}
                                        </span>
                                    )}
                                </div>
                                {/* CTA Buttons */}
                                <div className="card-cta-buttons">
                                    {isEnrolled ? (
                                        <Link to="/dashboard" className="card-btn card-btn-primary text-decoration-none text-center d-flex align-items-center justify-content-center">
                                            Continue Learning
                                        </Link>
                                    ) : (
                                        <>
                                            <button className="card-btn card-btn-primary">
                                                Enroll Now
                                            </button>
                                            <button className="card-btn card-btn-outline">
                                                Add to Cart
                                            </button>
                                        </>
                                    )}
                                </div>
                                {/* 30-Day Guarantee */}
                                <p className="card-guarantee">
                                    30-Day Money-Back Guarantee
                                </p>
                                {/* Course Inclusions */}
                                <div className="card-inclusions">
                                    <h4>This course includes:</h4>
                                    <ul>
                                        {course.inclusions.map((inclusion, index) => (
                                            <li key={index}>
                                                <span
                                                    className="material-symbols-outlined"
                                                    style={
                                                        inclusion.fill
                                                            ? { fontVariationSettings: '"FILL" 1' }
                                                            : undefined
                                                    }
                                                >
                                                    {inclusion.icon}
                                                </span>
                                                <span>
                                                    {inclusion.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Social Share */}
                                <div className="card-social">
                                    <button className="card-social-btn">
                                        <span className="material-symbols-outlined">
                                            share
                                        </span>
                                    </button>
                                    <button className="card-social-btn">
                                        <span className="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </button>
                                    <button className="card-social-btn">
                                        <span className="material-symbols-outlined">
                                            bookmark
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            {/* Detailed Instructor Bio Section (Bento Inspired) */}
            <section className="bg-surface-container py-16">
                <div className="max-w-container-max mx-auto px-gutter">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">
                        Meet Your Instructor
                    </h2>
                    <div className="row g-8">
                        {/* Bio Card */}
                        <div className="col-lg-8">
                            <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm d-flex flex-column flex-md-row gap-8 h-100">
                                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-outline-variant">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        alt={course.author}
                                        src={course.authorImg}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-headline-md text-headline-md text-primary mb-1">
                                        {course.author}
                                    </h3>
                                    <p className="font-label-md text-secondary mb-4">
                                        {course.authorRole}
                                    </p>
                                    {course.authorBio.map((bioP, index) => (
                                        <p key={index} className="font-body-md text-on-surface-variant mb-0">
                                            {bioP}
                                        </p>
                                    ))}
                                    <div className="d-flex gap-4 mt-6">
                                        <a
                                            className="text-on-surface-variant hover-text-primary text-decoration-none"
                                            href="#"
                                        >
                                            <span className="material-symbols-outlined">
                                                public
                                            </span>
                                        </a>
                                        <a
                                            className="text-on-surface-variant hover-text-primary text-decoration-none"
                                            href="#"
                                        >
                                            <span className="material-symbols-outlined">
                                                link
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mini Stats */}
                        <div className="col-lg-4">
                            <div className="instructor-stats-card p-8 rounded-2xl text-on-primary d-flex flex-column justify-content-center space-y-6 h-100">
                                {course.instructorStats.map((stat, index) => (
                                    <React.Fragment key={index}>
                                        {index > 0 && <div className="border-top border-outline-variant-30" />}
                                        <div className="text-center">
                                            <p className="font-headline-lg text-secondary-fixed mb-1">
                                                {stat.value}
                                            </p>
                                            <p className="font-label-sm text-on-primary-container uppercase mb-0">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default CourseDetails;
