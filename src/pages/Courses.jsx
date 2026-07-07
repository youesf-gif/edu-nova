import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import CategorySidebar from "../components/CategorySidebar";
import "../styles/home.css";
import "../styles/courses.css";

// Dynamic course data extracted from courses.html
const coursesData = [
    {
        id: 1,
        title: "Advanced UI/UX Design Systems",
        author: "Dr. Sarah Jenkins",
        price: "$89.99",
        numericPrice: 89.99,
        rating: 4.9,
        reviews: "12.4k students",
        badge: "Bestseller",
        category: "Design",
        difficulty: "Advanced",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWqGOUCJ5Kazo_urKCwysi7kIhVmKJ3F4qBTLfgau1ZsjApNMUfHeH6Fn8ZdnE6yPO1lkgEqZGJnUfkUInt9HSBMMgaJQnu-pJQnYvdbK50yCrSfJhpG_0D2AeArhaBFppqPYJDNVp244-gRofCRANDfeVfwY_ucecxM9aahXseZ_Wv1mezI7pT4ejAzVxXXJPjOspIsJvL_ykuBZ07XYFJ30sasvdhCM6b6z6asjqmNWhIpQclbgMsiC1r8zTyJ7ZXllbAoDGEvE",
        imgAlt: "A professional close-up of a designer working on a high-resolution interface on a large monitor, surrounded by sleek minimalist workspace elements.",
    },
    {
        id: 2,
        title: "Full-Stack Web Engineering 2024",
        author: "Marcus Thorne",
        price: "$129.00",
        numericPrice: 129.0,
        rating: 4.8,
        reviews: "8.2k students",
        badge: null,
        category: "Development",
        difficulty: "Intermediate",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJPew-cSnRDjqU0wJPR1ruaq-LraH2llweZTi-K9kc9SZpOnRHX-MABUT5BCY2Z8r3PY-CA70iGhxzBAca7lvTc4u3xEu_UcC2nDbDsH8D2rTTeaApVcA_BTR45bVPYQRZcW62OAmjh_NGfD7Xif_7nhimNVOpm0WOk9-Nt4cYyJbN9PmxF_FQWk3O2T2BVmz--scVIp4L_fG5oZJ-5Cs7YF9DnZvqYUMH-GwcPqRVz12qH3YSQkZL2zPN8St0nj1JmejSqe72ROY",
        imgAlt: "A dynamic shot of a clean, modern software development environment with code flowing across multiple screens in a dark-mode editor.",
    },
    {
        id: 3,
        title: "Strategic Business Management",
        author: "Elena Rodriguez",
        price: "$54.99",
        numericPrice: 54.99,
        rating: 4.7,
        reviews: "5.1k students",
        badge: "Bestseller",
        category: "Business",
        difficulty: "Intermediate",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbbEdZcv_Qe2RpH_m4AyZ70L082iUsobJSOa9yk6Ag39ZxxXFESeZE_Y8-ZWFmqDuBHKZsxxqCJlhftu2orl5tJ8Ot5oBA14XV9Edjift743VHltWlDpo02Asf8z1KRBdneKqXqx7A0ZXfad0gU8x4srSFAifD1OzNZWvWyQI5h2ahCZTrS5Qq9ZPvFFG29bDxglY5q1GN-M2nqpIdXOlg2GRdPPyxidLh1Maq4mdgAa3AQd3yS13HjBypA3B0fxO22b0mdQ8zni8",
        imgAlt: "A sophisticated business setting featuring a glass-walled conference room overlooking a modern city skyline.",
    },
    {
        id: 4,
        title: "Digital Marketing Masterclass",
        author: "James Wilson",
        price: "$19.99",
        numericPrice: 19.99,
        rating: 4.5,
        reviews: "15.8k students",
        badge: null,
        category: "Marketing",
        difficulty: "Beginner",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyFPwgxz6ypx-kxoPbClV6T-GTJoT4o-pW1r8VXd_swueMcZC6C_Jo2r7oc1Morkn96fYjhwat6-3h72G7d9QGAOOHCXFiVrTYRyfh-LENOl40RTPk0a-rpbF8MVc8m492TR0OYs18-Rt6OQGPM35-XkO7LAQEQZIPwE9QxdSp_vUGdDhrsCGhKnwP_Z1v_jY-CU6-OGqLzUt62VPbVm-t05qxJ4qGLcDPCxkx7spcsXewndzxxUzOhiQOHiPRa_1VL5NRnpmAYrs",
        imgAlt: "An artistic composition of various marketing tools—social media icons, megaphone, and digital growth charts—floating in a stylized 3D space.",
    },
    {
        id: 5,
        title: "Python for Data Science & AI",
        author: "Sofia Chen",
        price: "$149.00",
        numericPrice: 149.0,
        rating: 4.9,
        reviews: "22.1k students",
        badge: null,
        category: "Development",
        difficulty: "Intermediate",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuByzQBtSbDfV7EtPEjmQ8mx3ttOs7JI-qLqD4JEuPxK9DcWjOwWv2ZknKeTVwdL0S_QHlJah0Q4eGb4JI1pGL7h86mXlV75AU5g23zh5vh9PDAhcQazwUVfYDQ7-W8fW3Vuize3WP_Z61lsmF5XPWiBcFw27gj8pcXvqd_q4yCyLxE40tJEu-nzsxMtxyX3rojmQcpU-kj5bViGJyOT1ShRKCx-grWlC-MhkBfO4VkaCkTFBLfsMs9PwIxPRXPLDU7-D_wCo7H58Ys",
        imgAlt: "A minimalist and high-tech visualization of neural networks and data particles forming complex structures.",
    },
    {
        id: 6,
        title: "Professional Photography Foundations",
        author: "David Miller",
        price: "$39.99",
        numericPrice: 39.99,
        rating: 4.6,
        reviews: "3.9k students",
        badge: null,
        category: "Design",
        difficulty: "Beginner",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGv2jHs0-4-kCw2wko4Hgr2c3nIdJid4zN69dDfFcrTwq1Q3p_d0eGFy8uM0JINDEfgFqKdEZRZdzWP7kDbTDGXrzqn9fR2M2pSf9m5_x0lwKizZAeFM_T_IZtNm8_e2anvLiIZuP1KTPiNOuVpYAEC1ddw3I4epdHETFFA7feAJKVR0Gjq_LyWcjowu4wxMKAOA2-AeF23JloTLZeQrrR0zuCl2kIQ5sKY6ZYIJRN9pYBvwRnVaqRajwhvix_JOZFNoQ6NlAYRpE",
        imgAlt: "A clean, minimalist studio shot of photography equipment including a high-end mirrorless camera, lenses, and softbox lighting setups.",
    },
];// Available categories with icons
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
