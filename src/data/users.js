import { coursesData } from './courses';

// Dynamically generate the enrolled courses array from coursesData
const enrolledCourses = coursesData.map(course => ({
  courseId: course.id,
  progress: 0
}));

export const mockUsers = [
  {
    id: '1',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@edustream.edu',
    password: 'password123',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2TUi8R3skg_Fb46LkbD80r9umiy_3ZkxjuBp6oulWjTl2lSiQcbyE-PYN21kEqGUNZhvEkO9OeSGvo-yVwPtpXY6Hymf-ipxapSE1doSGi72X_x294BWSAufy8_85EGWjJkMh-tAWmkiJ1nIrhSik8aaUvbVeshlns-5VjtxtgbAY5D2jEXond8z1sxuzIZIcZk1_6TUhKjsbzf2Zgd630pdYNZIpSfIxbXNG0fGf3zkorIeBf2UnUgbSNuLVnjuluisCYxGPtWY',
    role: 'Premium Learner',
    membership: 'Gold Member',
    bio: 'Senior Learning Designer with a passion for architectural history and digital pedagogy. Currently exploring the intersection of AI and traditional classroom environments.',
    enrolledCourses: enrolledCourses
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Miller',
    email: 'sarah.miller@edustream.edu',
    password: 'password456',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF9Wnja8qzPiZNvhVPkqr7J3x9Jmf7rwltzye4_9nhptU_vDs--VxK5MWlANK-poJru47CjHCE_gZRCVil9LIPW5mT2D0W0WTh39feFV0RaJBQtdSuFow-O_a27I3JU7ojIEio2zzfYXRoebxxFsO5f8FdgCT62GxYBpDBrL2KoIfrUlK5ohOCzf-BO-6K-PiccvC53-WDFbs-jTqM2PpdzT21L0zBkMmIa7Se0bSPpTK0nOskhGSdMNZxOnybNfW9nS5Lm1GHuf4',
    role: 'Standard Learner',
    membership: 'Silver Member',
    bio: 'UX/UI Designer trying to transition to Product Management. Avid learner of technology and online educational systems.',
    enrolledCourses: enrolledCourses
  }
];
