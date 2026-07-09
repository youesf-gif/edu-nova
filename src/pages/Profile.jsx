import ProfileTopNav       from "../components/profile/ProfileTopNav";
import ProfileSidebar      from "../components/profile/ProfileSidebar";
import ProfilePhotoCard    from "../components/profile/ProfilePhotoCard";
import VerificationCard    from "../components/profile/VerificationCard";
import ProfileForm         from "../components/profile/ProfileForm";
import MilestonesSection   from "../components/profile/MilestonesSection";
import ProfileFooter       from "../components/profile/ProfileFooter";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="min-h-screen d-flex flex-column" style={{ minHeight: "100vh" }}>
      <ProfileTopNav />

      <main
        className="flex-grow d-flex max-w-container-max mx-auto w-100"
        style={{ flex: "1 1 auto" }}
      >
        <ProfileSidebar />

        <section
          className="flex-grow p-stack-lg overflow-y-auto custom-scrollbar profile-content-section"
          style={{ flex: "1 1 auto" }}
        >
          <div className="max-w-4xl mx-auto space-y-stack-lg">
            {/* Section header */}
            <div className="border-b border-outline-variant pb-stack-md">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">
                Personal Information
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Update your profile details and how others see you on the platform.
              </p>
            </div>

            {/* Profile photo + verification row */}
            <div className="row g-3 bento-row">
              <div className="col-12 col-md-4">
                <ProfilePhotoCard />
              </div>
              <div className="col-12 col-md-8">
                <VerificationCard />
              </div>
            </div>

            {/* Edit form */}
            <ProfileForm />

            {/* Milestones */}
            <MilestonesSection />
          </div>
        </section>
      </main>

      <ProfileFooter />
    </div>
  );
}

export default Profile;
