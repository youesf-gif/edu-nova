import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import LearningCard from '../components/dashboard/LearningCard';
import AchievementBanner from '../components/dashboard/AchievementBanner';
import UpcomingDeadlines from '../components/dashboard/Deadlines';
import RecommendedWidget from '../components/dashboard/RecommendedItem';
import '../styles/dashboard.css';

export default function Dashboard() {
  const user = {
    name: 'Alex Johnson',
    role: 'Premium Learner',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2TUi8R3skg_Fb46LkbD80r9umiy_3ZkxjuBp6oulWjTl2lSiQcbyE-PYN21kEqGUNZhvEkO9OeSGvo-yVwPtpXY6Hymf-ipxapSE1doSGi72X_x294BWSAufy8_85EGWjJkMh-tAWmkiJ1nIrhSik8aaUvbVeshlns-5VjtxtgbAY5D2jEXond8z1sxuzIZIcZk1_6TUhKjsbzf2Zgd630pdYNZIpSfIxbXNG0fGf3zkorIeBf2UnUgbSNuLVnjuluisCYxGPtWY',
    avatarAlt: 'Close-up portrait of a friendly male student wearing modern glasses'
  };

  const stats = {
    totalCourses: 12,
    hoursLearned: 148,
    certificates: 5
  };

  const courses = [
    {
      id: 1,
      title: 'Advanced Data Science with Python',
      moduleInfo: 'Module 4 of 8',
      progress: 75,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpq0K520BCTH5jJLp5lp23V-Ljhx2XNeiqKtRP19F-s9LCfcUp_ijwVwMhU8fXW84NpYK9uI8Vz2QXsPz7q5BBtvG9Wvgx7tTT5Epb53t7y3l_87f38yChol58SowjussNKABp-GeFh649Ayf0DwBkHlangq8iTAhO-Jw0Lp4_faBQ2-eWVap56Ng4qU1i-ppxrt7jWHcdDJh7Z2jqA64pX-NaWnQTPud46kXN8uQwQkLsxwe0AC8OmeFWs5jJLLpCWGx7K1slnN4',
      imageAlt: 'High-resolution digital illustration of abstract 3D data visualizations and neural network webs'
    },
    {
      id: 2,
      title: 'Principles of Modern UI/UX Design',
      moduleInfo: 'Module 2 of 10',
      progress: 42,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxY1L8H1Rnyz6JP8UIZ4ehiemH6BlPdgvg_skpMduCPwQ24bz4Muz3eT5A4OSa6_BKwo0Do48xQSBarnXFzXDpp3WAJIQpaVmMLuEP_b5KecQHDSIp0HFPMybvPk_PZ5nWlQv_nhjQIoii5Qyc7PHvIUq5M1xvlyDTiq85KlnxtCYftCL65yx1xVfIPkfGu8eVgWtsRXy4mPHT4Lm7N5GtjL0bZbsn68HIlsLFiyhmNyN_dgSr1w2-zj2v3JOlDf0Zva3xGr36dJY',
      imageAlt: 'A minimalist and aesthetic top-down view of a modern designer\'s workspace'
    }
  ];

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
                    <LearningCard course={course} />
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
