import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import LearningCard from '../components/dashboard/LearningCard';
import AchievementBanner from '../components/dashboard/AchievementBanner';
import UpcomingDeadlines from '../components/dashboard/Deadlines';
import RecommendedWidget from '../components/dashboard/RecommendedItem';
import { useAuth } from '../context/AuthContext';
import { getEnrolledCourses } from '../utils/getEnrolledCourses';
import '../styles/dashboard.css';

export default function Dashboard() {
  const { currentUser } = useAuth();

  const user = {
    name: `${currentUser?.firstName || ''} ${currentUser?.lastName || ''}`.trim(),
    role: currentUser?.role,
    avatarUrl: currentUser?.avatar,
    avatarAlt: `${currentUser?.firstName || 'User'}'s avatar`
  };

  const stats = {
    totalCourses: 12,
    hoursLearned: 148,
    certificates: 5
  };

  const enrolledCoursesList = getEnrolledCourses(currentUser?.enrolledCourses || []);

  const courses = enrolledCoursesList.map(course => ({
    id: course.id,
    title: course.title,
    image: course.imgSrc,
    imageAlt: course.imgAlt,
    instructor: course.author,
    progress: course.progress,
    moduleInfo: `Module 1 of ${course.curriculum?.length || 5}`
  }));

  const deadlines = [
    {
      id: 1,
      title: 'Quiz: Python Algorithms',
      detail: 'Due at 11:59 PM',
      month: 'OCT',
      day: '24',
      isUrgent: true
    },
    {
      id: 2,
      title: 'Final Project: UI Kit',
      detail: 'Course: Modern Design',
      month: 'OCT',
      day: '27',
      isUrgent: false
    }
  ];

  const recommendations = [
    {
      id: 101,
      title: 'Digital Photography 101',
      rating: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAti6wMP-DiwUlSHeeNe3pr-7IlhfMbtJC08mrb_npS-7v41oEl4YEoYrAeY2eK7l4UXbZjgQ16jSIq1sCDcb4UliqhlHNP7CYLWb1Ers8JpDk93lmhC0I0peUicpMpK4I0hVciUqslxX8XYMET33fFJGrSw_jsb0peoRH8hdCE81mgF93BJS-E6xg9jTMJ8SM-Do7DMlZ7anX-0ec5pdPjlh01ot6_DLKu6bs3QKKHtz_hfqDyfI3E4_ZrRtIf1HrARu7ev0jfdXE',
      imageAlt: 'Cinematic close-up of a professional camera lens with glowing digital interfaces'
    }
  ];

  return (
    <div className="d-flex min-vh-100 overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar activeTab="dashboard" user={user} />

      {/* Main Canvas */}
      <main className="flex-grow-1 d-flex flex-column vh-100 overflow-y-auto custom-scrollbar main-canvas">
        {/* Header App Bar */}
        <Header 
          userName={user.name} 
          lessonsCount={deadlines.length} 
        />

        {/* Tab Contents */}
        <div className="content-container p-3 p-md-4">
          {/* Quick Stats */}
          <section className="row g-4">
            <div className="col-12 col-sm-4">
              <StatCard label="Total Courses" value={stats.totalCourses} icon="menu_book" />
            </div>
            <div className="col-12 col-sm-4">
              <StatCard label="Hours Learned" value={stats.hoursLearned} icon="schedule" />
            </div>
            <div className="col-12 col-sm-4">
              <StatCard label="Certificates" value={stats.certificates} icon="workspace_premium" />
            </div>
          </section>

          {/* Main Content Layout Grid */}
          <div className="row g-4">
            <div className="col-12 col-lg-8 d-flex flex-column gap-4">
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="text-headline-md text-primary m-0">Currently Learning</h3>
                <button 
                  className="btn border-0 p-0 text-secondary text-label-md text-decoration-none hover-underline"
                >
                  View all
                </button>
              </div>

              {/* Learning Cards Grid */}
              <div className="row g-4">
                {courses.map(course => (
                  <div key={course.id} className="col-12 col-md-6">
                    <LearningCard 
                      id={course.id}
                      title={course.title}
                      image={course.image}
                      instructor={course.instructor}
                      progress={course.progress}
                      imageAlt={course.imageAlt}
                      moduleInfo={course.moduleInfo}
                      onContinue={(id) => alert(`Continuing course ${id}`)}
                    />
                  </div>
                ))}
              </div>

              {/* Achievement Banner */}
              <AchievementBanner />
            </div>

            {/* Right widgets column */}
            <aside className="col-12 col-lg-4 d-flex flex-column gap-4">
              <UpcomingDeadlines deadlines={deadlines} />
              <RecommendedWidget recommendations={recommendations} />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
