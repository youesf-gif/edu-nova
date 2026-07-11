import { useNavigate, Link } from "react-router-dom";
import { coursesData } from "../data/courses";
import HomeCourseCard from "./HomeCourseCard";

function PopularCourses() {
  const navigate = useNavigate();
  const featuredCourses = coursesData.filter(course => course.featured === true);

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
          {featuredCourses.map((course) => (
            <div className="col" key={course.id}>
              <HomeCourseCard 
                course={course} 
                onClick={() => navigate(`/courses/${course.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
