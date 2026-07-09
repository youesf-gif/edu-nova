/**
 * MilestoneCard — a single stat box used inside the Educational Milestones section.
 *
 * @param {string} value  - The large displayed number/text (e.g. "12", "1.2k", "Top 5%")
 * @param {string} label  - The descriptive label beneath the value (e.g. "Courses Completed")
 */
function MilestoneCard({ value, label }) {
  return (
    <div className="milestone-stat-box text-center p-4 bg-white-60 backdrop-blur rounded-xl h-100">
      <span className="font-headline-lg text-secondary block">{value}</span>
      <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default MilestoneCard;
