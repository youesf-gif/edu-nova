import MilestoneCard from "./MilestoneCard";
import { useAuth } from "../../context/AuthContext";

function MilestonesSection() {
  const { currentUser } = useAuth();

  const milestones = [
    { value: String(currentUser?.enrolledCourses?.length || 0), label: "Enrolled Courses" },
    { value: "84",     label: "Certificates"      },
    { value: "1.2k",   label: "Learning Hours"    },
    { value: "Top 5%", label: "Global Rank"       },
  ];

  return (
    <div className="bento-card milestone-card p-stack-lg shadow-sm relative overflow-hidden">
      <div className="relative z-50">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Educational Milestones
        </h3>

        <div className="row g-3 milestone-row mt-6">
          {milestones.map((m) => (
            <div key={m.label} className="col-6 col-md-3">
              <MilestoneCard value={m.value} label={m.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blur orb */}
      <div className="absolute neg-right-12 neg-bottom-12 w-48 h-48 bg-secondary-10 rounded-full blur-3xl" />
    </div>
  );
}

export default MilestonesSection;
