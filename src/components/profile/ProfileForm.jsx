function ProfileForm() {
  return (
    <div className="bento-card p-stack-lg space-y-6">
      {/* First Name + Last Name */}
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface">First Name</label>
            <input
              className="w-100 px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus-ring-secondary focus-border-secondary outline-none transition-all"
              type="text"
              defaultValue="Alexander"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface">Last Name</label>
            <input
              className="w-100 px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus-ring-secondary focus-border-secondary outline-none transition-all"
              type="text"
              defaultValue="Sterling"
            />
          </div>
        </div>
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <label className="font-label-md text-on-surface">Email Address</label>
        <div className="relative">
          <span
            className="material-symbols-outlined absolute left-4 text-on-surface-variant text-body-md"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            mail
          </span>
          <input
            className="w-100 pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus-ring-secondary focus-border-secondary outline-none transition-all"
            type="email"
            defaultValue="alex.sterling@edustream.edu"
          />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <div className="d-flex justify-content-between align-items-center">
          <label className="font-label-md text-on-surface">Bio</label>
          <span className="text-label-sm text-on-surface-variant">
            240 characters remaining
          </span>
        </div>
        <textarea
          className="w-100 px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus-ring-secondary focus-border-secondary outline-none transition-all resize-none"
          rows={4}
          defaultValue="Senior Learning Designer with a passion for architectural history and digital pedagogy. Currently exploring the intersection of AI and traditional classroom environments."
        />
      </div>

      {/* Action buttons */}
      <div className="d-flex align-items-center gap-4 pt-4">
        <button className="px-8 py-3 bg-secondary text-on-secondary font-bold rounded-full hover-bg-on-secondary-container transition-all shadow-md active-scale-95 cursor-pointer">
          Save Changes
        </button>
        <button className="px-8 py-3 text-secondary font-bold border-2 border-secondary rounded-full hover-bg-secondary-5 transition-all cursor-pointer">
          Discard
        </button>
      </div>
    </div>
  );
}

export default ProfileForm;
