import { coursesData } from '../data/courses';

/**
 * Utility to join the user's enrolled courses with course details.
 * @param {Array} enrolledCourses - Array of { courseId, progress }
 * @returns {Array} Array of course details joined with progress
 */
export function getEnrolledCourses(enrolledCourses = []) {
  return enrolledCourses
    .map((enrollment) => {
      const courseDetail = coursesData.find((c) => c.id === enrollment.courseId);
      if (!courseDetail) return null;
      return {
        ...courseDetail,
        progress: enrollment.progress,
      };
    })
    .filter(Boolean);
}
