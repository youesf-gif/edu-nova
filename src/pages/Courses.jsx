import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import CategorySidebar from "../components/CategorySidebar";
import { coursesData } from "../data/courses";
import "../styles/home.css";
import "../styles/courses.css";

// Available categories with icons
const categories = [
    { name: "All Courses", icon: "grid_view" },
    { name: "Design", icon: "palette" },
    { name: "Development", icon: "code" },
    { name: "Business", icon: "trending_up" },
    { name: "Marketing", icon: "campaign" },
];

const COURSES_PER_PAGE = 6;

function Courses() {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);
    const [sortBy, setSortBy] = useState("popular");
    const [currentPage, setCurrentPage] = useState(1);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    // Toggle difficulty filters selection
    const handleDifficultyToggle = (difficulty) => {
        setSelectedDifficulties((prev) =>
            prev.includes(difficulty)
                ? prev.filter((d) => d !== difficulty)
                : [...prev, difficulty],
        );
        setCurrentPage(1); // Reset page on filter change
    };



    // Filter and sort logic
    const filteredCourses = coursesData
        .filter((course) => {
            // Category filter
            if (
                selectedCategory !== "All Courses" &&
                course.category !== selectedCategory
            ) {
                return false;
            }
            // Search query filter
            if (
                searchQuery &&
                !course.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) &&
                !course.author.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }
            // Difficulty filter
            if (
                selectedDifficulties.length > 0 &&
                !selectedDifficulties.includes(course.difficulty)
            ) {
                return false;
            }
            return true;
        })
        .sort((a, b) => {
            // Sorting
            if (sortBy === "price-low-high") {
                return a.numericPrice - b.numericPrice;
            }
            if (sortBy === "newest") {
                return b.id - a.id;
            }
            // Default: Most Popular (rating descending)
            return b.rating - a.rating;
        });

    // Pagination calculations
    const totalCourses = filteredCourses.length;
    const totalPages = Math.ceil(totalCourses / COURSES_PER_PAGE);
    const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));

    const startIndex = (safeCurrentPage - 1) * COURSES_PER_PAGE;
    const endIndex = startIndex + COURSES_PER_PAGE;
    const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Navbar />

            <div className="d-flex w-100 courses-main-container">
                {/* SideNavBar */}
                <CategorySidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedDifficulties={selectedDifficulties}
                    handleDifficultyToggle={handleDifficultyToggle}
                    categories={categories}
                />

                {/* Main Content Area */}
                <main className="flex-grow-1 p-gutter bg-background overflow-y-auto">
                    {/* Header & Filters Section */}
                    <div className="d-flex flex-column flex-xl-row justify-content-between align-items-xl-end gap-3 mb-4">
                        <div>
                            <h1 className="font-headline-xl text-headline-xl text-primary mb-0">
                                Explore All Courses
                            </h1>
                            <p className="text-on-surface-variant font-body-lg mt-2 mb-0">
                                Level up your skills with our expert-led
                                curricula.
                            </p>
                        </div>

                        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 w-100 w-lg-auto">
                            {/* Search input inside main content for better usability */}
                            <div className="position-relative w-100 w-lg-auto">
                                <span className="material-symbols-outlined position-absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                                    search
                                </span>
                                <input
                                    className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-label-md transition-all search-input w-100"
                                    placeholder="Search courses..."
                                    type="text"
                                    aria-label="Search courses"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>

                            <div className="d-flex align-items-center gap-2 text-label-md text-on-surface-variant justify-content-between justify-content-lg-start w-100 w-lg-auto">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary d-lg-none d-flex align-items-center gap-1 px-3 py-1 text-label-md rounded-lg"
                                    onClick={() => setIsOffcanvasOpen(true)}
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                                        filter_list
                                    </span>
                                    <span>Filters</span>
                                </button>
                                <span className="text-nowrap me-2 d-none d-lg-inline">
                                    Showing {filteredCourses.length} of{" "}
                                    {coursesData.length} courses
                                </span>
                                <select
                                    className="form-select bg-surface border border-outline-variant rounded-lg px-3 py-1 text-label-md w-auto ms-auto ms-lg-0"
                                    value={sortBy}
                                    aria-label="Sort courses by"
                                    onChange={(e) => {
                                        setSortBy(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <option value="popular">
                                        Most Popular
                                    </option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low-high">
                                        Price: Low to High
                                    </option>
                                </select>
                            </div>

                            {/* Showing count displayed on its own row below Filters/Sort on mobile and tablet */}
                            <div className="text-label-md text-on-surface-variant d-lg-none w-100 mt-1">
                                Showing {filteredCourses.length} of{" "}
                                {coursesData.length} courses
                            </div>
                        </div>
                    </div>

                    {/* Grid of Course Cards */}
                    {filteredCourses.length === 0 ? (
                        <div className="text-center py-5">
                            <span className="material-symbols-outlined text-outline text-headline-xl mb-3">
                                search_off
                            </span>
                            <p className="font-body-lg text-on-surface-variant mb-0">
                                No courses match your active filters.
                            </p>
                        </div>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {paginatedCourses.map((course) => (
                                <div className="col" key={course.id}>
                                    <CourseCard course={course} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination - only render if there are more courses than COURSES_PER_PAGE */}
                    {totalCourses > COURSES_PER_PAGE && (
                        <div className="mt-5 d-flex justify-content-center align-items-center gap-2">
                            <button
                                type="button"
                                className="pagination-btn"
                                disabled={safeCurrentPage === 1}
                                onClick={() => setCurrentPage(safeCurrentPage - 1)}
                            >
                                <span className="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </button>

                            {pageNumbers.map((page) => (
                                <button
                                    type="button"
                                    key={page}
                                    className={`pagination-btn ${safeCurrentPage === page ? "active" : ""}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                type="button"
                                className="pagination-btn"
                                disabled={safeCurrentPage === totalPages}
                                onClick={() => setCurrentPage(safeCurrentPage + 1)}
                            >
                                <span className="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    )}
                </main>
            </div>

            {/* Mobile Filters Offcanvas Drawer */}
            <div
                className={`offcanvas offcanvas-start ${isOffcanvasOpen ? "show" : ""}`}
                style={{ visibility: isOffcanvasOpen ? "visible" : "hidden" }}
                tabIndex="-1"
                id="mobileFiltersOffcanvas"
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title text-primary font-bold">Filters</h5>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => setIsOffcanvasOpen(false)}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <CategorySidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedDifficulties={selectedDifficulties}
                        handleDifficultyToggle={handleDifficultyToggle}
                        categories={categories}
                        className="d-flex flex-column courses-sidebar-mobile"
                    />
                </div>
            </div>
            {isOffcanvasOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={() => setIsOffcanvasOpen(false)}
                ></div>
            )}

            <Footer />
        </>
    );
}

export default Courses;
