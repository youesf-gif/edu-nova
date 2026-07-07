import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
];

// Available categories with icons
const categories = [
    { name: "All Courses", icon: "grid_view" },
    { name: "Design", icon: "palette" },
    { name: "Development", icon: "code" },
    { name: "Business", icon: "trending_up" },
    { name: "Marketing", icon: "campaign" },
];

function Courses() {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);
    const [sortBy, setSortBy] = useState("popular");
    const [currentPage, setCurrentPage] = useState(1);

    // Toggle difficulty filters selection
    const handleDifficultyToggle = (difficulty) => {
        setSelectedDifficulties((prev) =>
            prev.includes(difficulty)
                ? prev.filter((d) => d !== difficulty)
                : [...prev, difficulty],
        );
    };

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

    return (
        <>
            <Navbar />

            <div className="d-flex w-100 courses-main-container">
                {/* SideNavBar */}
                <aside className="d-none d-lg-flex flex-column courses-sidebar">
                    <div className="mb-4">
                        <h2 className="font-headline-md text-headline-md text-primary mb-1">
                            Categories
                        </h2>
                        <p className="font-body-md text-label-md text-on-surface-variant m-0">
                            Filter by interest
                        </p>
                    </div>

                    <nav className="d-flex flex-column gap-2 mb-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                className={`category-filter-btn ${selectedCategory === cat.name ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat.name)}
                            >
                                <span className="material-symbols-outlined">
                                    {cat.icon}
                                </span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="border-top border-outline-variant pt-4">
                        <h3 className="font-label-md text-label-md text-primary font-bold mb-3">
                            Difficulty
                        </h3>
                        <div className="d-flex flex-column gap-2 difficulty-filter-group">
                            {["Beginner", "Intermediate", "Advanced"].map(
                                (level) => (
                                    <label
                                        key={level}
                                        className="d-flex align-items-center gap-2 text-label-md cursor-pointer group"
                                    >
                                        <input
                                            className="form-check-input rounded border-outline-variant"
                                            type="checkbox"
                                            checked={selectedDifficulties.includes(
                                                level,
                                            )}
                                            onChange={() =>
                                                handleDifficultyToggle(level)
                                            }
                                        />
                                        <span className="group-hover:text-primary transition-colors">
                                            {level}
                                        </span>
                                    </label>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Quick links at bottom of sidebar */}
                    <div className="mt-auto border-top border-outline-variant pt-3 d-flex flex-column gap-2">
                        <a
                            className="d-flex align-items-center gap-2 text-on-surface-variant hover-text-secondary text-decoration-none py-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">
                                help
                            </span>
                            <span className="font-label-md">Support</span>
                        </a>
                        <a
                            className="d-flex align-items-center gap-2 text-on-surface-variant hover-text-secondary text-decoration-none py-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                            <span className="font-label-md">Settings</span>
                        </a>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-grow-1 p-gutter bg-background overflow-y-auto">
                    {/* Header & Filters Section */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
                        <div>
                            <h1 className="font-headline-xl text-headline-xl text-primary mb-0">
                                Explore All Courses
                            </h1>
                            <p className="text-on-surface-variant font-body-lg mt-2 mb-0">
                                Level up your skills with our expert-led
                                curricula.
                            </p>
                        </div>

                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                            {/* Search input inside main content for better usability */}
                            <div className="position-relative">
                                <span className="material-symbols-outlined position-absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                                    search
                                </span>
                                <input
                                    className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-label-md transition-all search-input"
                                    placeholder="Search courses..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                            </div>

                            <div className="d-flex align-items-center gap-2 text-label-md text-on-surface-variant justify-content-between">
                                <span className="text-nowrap me-2">
                                    Showing {filteredCourses.length} of{" "}
                                    {coursesData.length} courses
                                </span>
                                <select
                                    className="form-select bg-surface border border-outline-variant rounded-lg px-3 py-1 text-label-md w-auto"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
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
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                            {filteredCourses.map((course) => (
                                <div className="col" key={course.id}>
                                    <div className="course-card group">
                                        <div className="course-img-wrapper">
                                            <img
                                                className="course-img"
                                                src={course.imgSrc}
                                                alt={course.imgAlt}
                                            />
                                            {course.badge && (
                                                <span className="badge-bestseller">
                                                    {course.badge}
                                                </span>
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
                                            <p className="course-author mb-2">
                                                {course.author}
                                            </p>
                                            <div className="course-rating mt-auto mb-3">
                                                <span className="text-secondary font-bold text-label-md me-1">
                                                    {course.rating}
                                                </span>
                                                <div className="stars me-2">
                                                    {renderStars(course.rating)}
                                                </div>
                                                <span className="reviews-count">
                                                    ({course.reviews})
                                                </span>
                                            </div>
                                            <div className="course-footer pt-3 border-top border-outline-variant/30">
                                                <button className="btn btn-view-details w-100">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-5 d-flex justify-content-center align-items-center gap-2">
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(1)}
                        >
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </button>
                        <button
                            className={`pagination-btn ${currentPage === 1 ? "active" : ""}`}
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </button>
                        <button
                            className={`pagination-btn ${currentPage === 2 ? "active" : ""}`}
                            onClick={() => setCurrentPage(2)}
                        >
                            2
                        </button>
                        <button
                            className={`pagination-btn ${currentPage === 3 ? "active" : ""}`}
                            onClick={() => setCurrentPage(3)}
                        >
                            3
                        </button>
                        <span className="px-2 text-outline">...</span>
                        <button
                            className={`pagination-btn ${currentPage === 12 ? "active" : ""}`}
                            onClick={() => setCurrentPage(12)}
                        >
                            12
                        </button>
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 12}
                            onClick={() => setCurrentPage(12)}
                        >
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </button>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}

export default Courses;
