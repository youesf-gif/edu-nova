import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/dashboard.css";

const stats = [
  { label: "Courses completed", value: "12", detail: "+3 this month" },
  { label: "Study hours", value: "86h", detail: "Focus streak 7 days" },
  { label: "Certificates", value: "4", detail: "2 in review" },
  { label: "Weekly goal", value: "78%", detail: "On track" },
];

const ongoingCourses = [
  {
    title: "UI/UX Design Systems",
    progress: 82,
    lessons: "14/17 lessons",
    badge: "Design",
    focus: "Visual hierarchy & wireframes",
  },
  {
    title: "React for Product Teams",
    progress: 64,
    lessons: "8/12 lessons",
    badge: "Development",
    focus: "Reusable components & state",
  },
  {
    title: "Strategic Thinking",
    progress: 47,
    lessons: "5/10 lessons",
    badge: "Business",
    focus: "Decision making & case studies",
  },
];

const schedule = [
  {
    time: "09:30",
    title: "Live mentor session",
    meta: "Design critique • 45 min",
  },
  {
    time: "13:00",
    title: "Practice quiz",
    meta: "Frontend fundamentals • 20 min",
  },
  {
    time: "19:00",
    title: "Project review",
    meta: "Portfolio case study • 1 hour",
  },
];

const communityUpdates = [
  {
    name: "Mina",
    role: "Design peer",
    message: "Shared a new layout system idea for the mobile onboarding flow.",
  },
  {
    name: "Omar",
    role: "Study buddy",
    message: "Finished the React hooks module and is ready to review together.",
  },
  {
    name: "Sara",
    role: "Mentor",
    message: "Dropped a feedback note on your latest project submission.",
  },
];

const achievements = [
  "Completed the React foundations sprint",
  "Earned a new learning streak badge",
  "Finished 3 peer-reviewed assignments",
  "Joined 2 collaborative study circles",
];

function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar minimal />
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar">
          <div className="sidebar-brand">
            <div className="brand-icon">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <p className="sidebar-label">Learning hub</p>
              <h2>EduNova</h2>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button
              type="button"
              className={`sidebar-link ${activeSection === "overview" ? "active" : ""}`}
              onClick={() => handleSectionClick("overview")}
            >
              <span className="material-symbols-outlined">dashboard</span>
              Overview
            </button>
            <button
              type="button"
              className={`sidebar-link ${activeSection === "learning" ? "active" : ""}`}
              onClick={() => handleSectionClick("learning")}
            >
              <span className="material-symbols-outlined">menu_book</span>
              Learning
            </button>
            <button
              type="button"
              className={`sidebar-link ${activeSection === "calendar" ? "active" : ""}`}
              onClick={() => handleSectionClick("calendar")}
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Schedule
            </button>
            <button
              type="button"
              className={`sidebar-link ${activeSection === "community" ? "active" : ""}`}
              onClick={() => handleSectionClick("community")}
            >
              <span className="material-symbols-outlined">groups</span>
              Community
            </button>
          </nav>

          <div className="sidebar-card">
            <p className="sidebar-label">Daily focus</p>
            <h3>2 sessions left</h3>
            <p>Keep your momentum going with one short review block.</p>
          </div>
        </aside>

        <main className="dashboard-main" id="overview">
          {activeSection === "overview" && (
            <>
              <section className="dashboard-hero">
                <div>
                  <p className="eyebrow">Student dashboard</p>
                  <h1>Welcome back, Amina.</h1>
                  <p className="hero-copy">
                    You are making strong progress. Pick up where you left off
                    and stay on track for your next milestone.
                  </p>
                </div>
                <div className="dashboard-cta">
                  <p className="sidebar-label">Next milestone</p>
                  <h3>Certificate unlocked</h3>
                  <p>Finish 2 more lessons to claim your new badge.</p>
                  <Link className="dashboard-btn" to="/courses">
                    Continue learning
                  </Link>
                </div>
              </section>

              <section className="section-hero overview-hero">
                <div>
                  <p className="eyebrow">At a glance</p>
                  <h2>Your learning hub is on fire</h2>
                  <p>
                    Track progress, revisit milestones, and keep momentum high.
                  </p>
                </div>
                <div className="section-highlight-stat">
                  <span>Weekly streak</span>
                  <strong>7 days</strong>
                </div>
              </section>

              <section className="stats-grid">
                {stats.map((stat) => (
                  <article className="stat-card" key={stat.label}>
                    <p className="stat-label">{stat.label}</p>
                    <h3>{stat.value}</h3>
                    <p className="stat-detail">{stat.detail}</p>
                  </article>
                ))}
              </section>

              <section className="content-grid">
                <article className="panel">
                  <div className="panel-heading">
                    <div>
                      <p className="eyebrow">Quick access</p>
                      <h2>Learning overview</h2>
                    </div>
                  </div>
                  <div className="course-list">
                    {ongoingCourses.slice(0, 2).map((course) => (
                      <div className="course-item" key={course.title}>
                        <div className="course-top">
                          <div>
                            <h3>{course.title}</h3>
                            <p>{course.lessons}</p>
                          </div>
                          <span className="course-badge">{course.badge}</span>
                        </div>
                        <p className="course-focus">{course.focus}</p>
                        <div className="mini-info-row">
                          <span>Next lesson</span>
                          <strong>Module 5</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel highlighted-panel">
                  <p className="eyebrow">Milestones</p>
                  <h2>Achievement tracker</h2>
                  <ul className="achievement-list">
                    {achievements.slice(0, 3).map((item) => (
                      <li key={item}>
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mini-info-row mt-3">
                    <span>Consistency</span>
                    <strong>7-day streak</strong>
                  </div>
                  <Link className="dashboard-btn" to="/courses">
                    Explore more
                  </Link>
                </article>
              </section>
            </>
          )}

          {activeSection === "learning" && (
            <section className="panel" id="learning">
              <div className="section-hero learning-hero">
                <div>
                  <p className="eyebrow">Learning</p>
                  <h2>Stay in motion with a focused path</h2>
                  <p>Resume the next lesson and keep your momentum strong.</p>
                </div>
                <div className="section-highlight-stat">
                  <span>3 active courses</span>
                  <strong>82% avg</strong>
                </div>
              </div>
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">In progress</p>
                  <h2>Current learning path</h2>
                </div>
                <Link className="panel-link" to="/courses">
                  View all
                </Link>
              </div>

              <div className="course-list">
                {ongoingCourses.map((course) => (
                  <div className="course-item enriched-card" key={course.title}>
                    <div className="course-top">
                      <div>
                        <h3>{course.title}</h3>
                        <p>{course.lessons}</p>
                      </div>
                      <span className="course-badge">{course.badge}</span>
                    </div>
                    <p className="course-focus">{course.focus}</p>
                    <div className="mini-info-row">
                      <span>Estimated time</span>
                      <strong>20 mins</strong>
                    </div>
                    <div
                      className="progress-track"
                      aria-label={`${course.title} progress`}
                    >
                      <div
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="progress-text">
                        {course.progress}% complete
                      </span>
                      <button className="progress-btn" type="button">
                        Resume
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeSection === "calendar" && (
            <section className="panel" id="calendar">
              <div className="section-hero schedule-hero">
                <div>
                  <p className="eyebrow">Schedule</p>
                  <h2>Your day is mapped out clearly</h2>
                  <p>Make space for practice, reflection, and focused study.</p>
                </div>
                <div className="section-highlight-stat">
                  <span>3 sessions</span>
                  <strong>Today</strong>
                </div>
              </div>
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Schedule</p>
                  <h2>Today&apos;s plan</h2>
                </div>
              </div>

              <div className="schedule-list">
                {schedule.map((item) => (
                  <div
                    className="schedule-item enriched-card"
                    key={`${item.time}-${item.title}`}
                  >
                    <div className="schedule-time">{item.time}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.meta}</p>
                    </div>
                  </div>
                ))}
                <div className="schedule-highlight">
                  <p className="sidebar-label">Focus tip</p>
                  <h3>Block 30 mins for revision before dinner.</h3>
                  <p>
                    Short review sessions help you retain more from each lesson.
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeSection === "community" && (
            <section className="panel" id="community">
              <div className="section-hero community-hero">
                <div>
                  <p className="eyebrow">Community</p>
                  <h2>Collaborate with learners and mentors</h2>
                  <p>Fresh ideas and support are waiting in your circle.</p>
                </div>
                <div className="section-highlight-stat">
                  <span>12 active peers</span>
                  <strong>Live now</strong>
                </div>
              </div>
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Community</p>
                  <h2>Latest updates</h2>
                </div>
              </div>
              <div className="community-list">
                {communityUpdates.map((update) => (
                  <div
                    className="community-item enriched-card"
                    key={update.name}
                  >
                    <div className="community-avatar">{update.name[0]}</div>
                    <div>
                      <h3>{update.name}</h3>
                      <p className="community-role">{update.role}</p>
                      <p>{update.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
