function VerificationCard() {
  return (
    <div className="bento-card p-6 d-flex flex-column justify-content-center h-100">
      <div className="space-y-4">
        {/* Verified badge row */}
        <div className="d-flex align-items-center gap-4 p-4 bg-surface-container-low rounded-xl">
          <div className="bg-secondary-container p-3 rounded-full text-on-secondary-container d-flex align-items-center justify-content-center">
            <span className="material-symbols-outlined">verified_user</span>
          </div>
          <div>
            <h4 className="font-label-md text-on-surface font-bold">
              Identity Verification
            </h4>
            <p className="text-label-sm text-on-surface-variant">
              Your account identity is verified. This helps build trust in the community.
            </p>
          </div>
        </div>

        {/* Learn more link */}
        <div className="d-flex align-items-center gap-2 text-secondary font-bold text-label-md cursor-pointer hover-underline">
          <span>Learn about public profiles</span>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
