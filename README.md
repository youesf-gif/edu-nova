# EduNova

EduNova is a modern, responsive web application for interactive online learning. The platform allows users to explore popular courses, manage their learning dashboard, configure their profile settings, and engage with high-quality educational content.

---

## Features

- **Home Page**: A curated landing page displaying platform stats, high-level benefits, testimonials, FAQs, and a collection of featured popular courses.
- **Courses Page**: A comprehensive, filterable catalog of all available courses, featuring pagination, category sidebar filters, search capabilities, difficulty checkboxes, and sorting options.
- **Course Details**: A dedicated detail view for each course showing descriptions, learning outcomes, dynamically rendered curriculum accordions, and course enrollment status.
- **Dashboard**: A user-centric learning canvas detailing currently enrolled courses with progress tracking, achievement banners, upcoming deadlines, and customized recommendations.
- **Profile Settings**: A responsive settings panel divided into sections for personal info, security, notifications, and payment options, allowing users to view and manage their profile details.
- **Mock Authentication**: A robust client-side authentication system that includes registration with field validations, automatic logins, session storage, and manual logouts.
- **Protected Routes**: Secure path redirection ensuring only logged-in users can access the dashboard and profile settings pages.
- **Dynamic Navigation**: A responsive header/navbar that adapts links and buttons depending on whether a user session is active.
- **Responsive Design**: An optimized mobile-first layout utilizing Bootstrap 5 grid systems and custom CSS media queries for high visual quality across screen sizes.

---

## Tech Stack

- **React**: Frontend UI component library (v19).
- **Vite**: Ultra-fast next-generation frontend tool and bundler.
- **React Router DOM**: Standard routing library (v7) for client-side navigation.
- **Bootstrap 5**: CSS framework for grid layout and components.
- **Custom CSS**: Vanilla CSS for bespoke visual components and fine-grained layouts.
- **React Context API**: React state container for mock authentication context and user list management.
- **JavaScript (ES6+)**: Language for application logic.
- **Local Storage**: Client-side storage used to persist registered users and session details across page refreshes.
- **Git**: Version control system.

---

## Project Structure

```text
src/
 ├── assets/      # Image assets (hero illustrations, logos, default user avatar)
 ├── components/  # Reusable UI components (Navbar, Footer, CourseCard, and sections)
 ├── context/     # React Context providers (AuthContext for session and user state)
 ├── data/        # Static and seed data models (courses.js, users.js)
 ├── pages/       # Page-level route views (Home, Courses, CourseDetails, Dashboard, Profile, Login, Register)
 ├── styles/      # Stylesheets (global rules, variables, and page-specific CSS files)
 ├── utils/       # Utility helper modules (course progress helpers)
 └── App.jsx      # Main application routing wrapper
```

- **assets/**: Contains visual assets, including the default user profile picture.
- **components/**: Holds modular UI pieces, such as general headers/footers and page-specific subcomponents like the dashboard sidebar.
- **context/**: Contains the global authentication context and session persistence logic.
- **data/**: Acts as the offline data layer/mock database.
- **pages/**: Folder for main application routes and views.
- **styles/**: Contains the CSS design system, containing theme variables and layout rules.
- **utils/**: Stores auxiliary logic like helper functions for retrieving enrolled courses.

---

## Routing

The project uses `createBrowserRouter` to handle the following routes:

- `/` : Home landing page (Public)
- `/courses` : Course search and catalog (Public)
- `/courses/:id` : Detailed view of a course (Public)
- `/login` : User login form (Public)
- `/register` : User sign-up form (Public)
- `/dashboard` : Personal learning progress tracking (**Protected**)
- `/profile` : Account settings panel (**Protected**)

*Protected routes are wrapped in a `<ProtectedRoute>` component that automatically redirects unauthenticated users back to `/login`.*

---

## Authentication

Authentication is fully simulated in the client-side environment using the React Context API:
- **Mock System**: No external servers are involved. Validation, registration, and logins run locally on the client.
- **Persistence**: User registrations and logged-in sessions are persisted in browser `localStorage`. Refreshing the page or navigating away does not lose user state.

---

## Data Layer

The application utilizes offline mock data modules located in `src/data`:
- **courses.js**: Acts as the single source of truth for the entire course catalog, details, curriculum structures, ratings, and price listings.
- **users.js**: Contains default predefined mock credentials (such as `alex.johnson@edustream.edu`) acting as database seed data on application startup.

---

## Reusable Components

- **Navbar**: The primary navigation header with responsive mobile drawer controls and adaptive auth states.
- **Footer**: The platform footer containing copyright and site links.
- **CourseCard**: Modular card representing a course inside list catalogs.
- **HomeCourseCard**: Simplified variation of the course card displaying featured courses on the home page.
- **ProtectedRoute**: Functional wrapper securing authenticated routes.
- **Dashboard Sidebar / Profile Sidebar**: Modular side navigation layouts for workspace/settings pages.
- **AuthVisualPanel**: Clean, reusable split panel showing EduNova branding alongside authentication forms.

---

## Installation

Follow these steps to set up the repository locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/youesf-gif/edu-nova.git
   ```

2. **Navigate to the directory**:
   ```bash
   cd react-v
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the local Vite development server**:
   ```bash
   npm run dev
   ```

---

## Future Improvements

- **Firebase Authentication & Firestore**: Implement real user login databases and cloud-persisted enrollments.
- **Backend API Integration**: Connect course cards and user profiles to a live server.
- **Image Upload**: Allow users to upload custom avatar headshots to cloud storage.
- **Payments Gateway**: Integrate Stripe or other gateways for mock course purchases.
- **Certificates Engine**: Generate shareable PDF completion certificates.

---

## Team Members

- Youssef Osama
- Youssef Tamer
- Mohamed Ahmed
- Adham Atef
