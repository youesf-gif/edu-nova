import { useState } from "react";
import { Link } from "react-router-dom";

function PopularCourses() {
  const [pressedIndex, setPressedIndex] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Mastering UI/UX Design Fundamentals",
      author: "By Sarah Jenkins • Senior Product Designer",
      rating: "5.0",
      reviews: "4.9k reviews",
      price: "$89.99",
      badge: "Bestseller",
      imgAlt: "A clean UI/UX course workspace desk setup.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYcWjHQMRggq2zgPwrfgpMmn0VK7QxpgIy6fgRHeOQNLsWHetx6s8pPfBfZzkuTIloFh0oEj_fjk-X02IKEL7iwdsNEPIRcuX6DhWrg_6BGQdXE-QCQn016rTwEjUfF4gma_ngp0oYK9juxPsnwXLlD_9uxPL8rjXRTxw-L23JZ8_RXTmnOvdjh1qDomsK3rAf-SbeKMQcNtgCih4MWa66ch19XAEJjoLB2fMyPBHC7pPnIg6lvLTDXGWlQMyFnkMgHxH27viDJQk"
    },
    {
      id: 2,
      title: "Advanced JavaScript & React 2024",
      author: "By Michael Chen • Full Stack Architect",
      rating: "5.0",
      reviews: "12k reviews",
      price: "$129.99",
      badge: "Bestseller",
      imgAlt: "Mechanic keyboard with RGB highlights showing code IDE lines.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPxPyamXBbHmjsipOLXYfQm2BHCoFkXXIlcK3Zqny0uKaIuypFKz8lofBZJmzCWJmGlmOKuHVVIIM0jGGTPLg9spDbw2mt47ajh0znr8YZjiP8HFGVN7V6b08498aDKQc-_IL2P6g06msh2TatsG21hlI4WgMbQcL8aPgO-4wIBKtjrxksKOFBpoPyvvSxBG4zpfc0o3uCx9nm74gEef-Zwi-xfhZvK6MS7E4PbUAdyrq7atwqNpfW_63ZjEBkjo-2A7-KK12bCbY"
    },
    {
      id: 3,
      title: "Data Science & Machine Learning",
      author: "By Dr. Elena Rodriguez • AI Researcher",
      rating: "5.0",
      reviews: "3.5k reviews",
      price: "$149.99",
      badge: null,
      imgAlt: "Large analytics and financial screens in business meeting.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGoYRFu7PU_lvc7WZZ5M4C54cypwttTr43iHF2C_nxI2FMX8XqfTpsj2UMDhsLjXKF1qUBfXFQG1KHV2zxys21e4l-caN8Ad-MDs5tOuujocwotWZRR85Bq6ROpR_e-C2S7kYI7bcuuuSqW4xuT6Sez7or2McjtTyGCZFKyIsr3eafgWl-JPIUq8UsCMqEBkcZ0ep5sr7ZZY8VEQrTG4MsxhkCDw9WbqyuEV4xHxZ3-_CtS2xc8iJ0LgNpx3bEysQGKiAuDqjt7zk"
    }
  ];

  return (
    <section className="courses-section">
      <div className="container-max">
        <div className="courses-header d-flex flex-column flex-md-row justify-content-between align-items-end mb-5 gap-3">
          <div>
            <h2 className="section-title mb-0">Most Popular Courses</h2>
            <p className="section-subtitle">Explore top-rated learning experiences chosen by thousands.</p>
          </div>
          <Link className="view-all-link group text-decoration-none" to="/courses">
            View All Courses <span className="material-symbols-outlined icon-arrow">arrow_forward</span>
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course, index) => (
            <div className="col" key={course.id}>
              <div className="course-card group">
                <div className="course-img-wrapper">
                  <img 
                    className="course-img" 
                    data-alt={course.imgAlt} 
                    src={course.imgSrc} 
                    alt={course.imgAlt}
                  />
                  {course.badge && (
                    <span className="badge-bestseller">{course.badge}</span>
                  )}
                </div>
                <div className="course-body">
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-author">{course.author}</p>
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
                      className={`btn-enroll ${pressedIndex === index ? "scale-95" : ""}`}
                      onMouseDown={() => setPressedIndex(index)}
                      onMouseUp={() => setPressedIndex(null)}
                      onMouseLeave={() => setPressedIndex(null)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
