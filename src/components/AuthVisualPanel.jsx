function AuthVisualPanel() {
  return (
    <div className="d-none d-md-flex w-md-50 bg-primary-container position-relative overflow-hidden px-12 px-lg-24 register-left-panel">
      <div className="w-100 min-h-100 d-flex flex-column">
        <div className="position-relative z-10 space-y-6 my-auto">
          <h1 className="font-headline-xl text-headline-xl text-on-primary leading-tight">
            Master New Skills<br />
            <span className="text-secondary-fixed">At Your Own Pace.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-md mb-0">
            Join thousands of students and professionals in the world's most innovative educational ecosystem. Start your journey today.
          </p>
          <div className="d-flex flex-wrap gap-4 pt-8">
            <div className="bg-primary-40 backdrop-blur-md border border-outline-20 p-4 rounded-xl d-flex align-items-center gap-4">
              <div className="w-12 h-12 bg-secondary-20 rounded-full d-flex align-items-center justify-content-center">
                <span className="material-symbols-outlined text-secondary-fixed">school</span>
              </div>
              <div>
                <p className="text-on-primary font-bold mb-0">12k+</p>
                <p className="text-primary-fixed-dim text-label-sm mb-0">Active Students</p>
              </div>
            </div>
            <div className="bg-primary-40 backdrop-blur-md border border-outline-20 p-4 rounded-xl d-flex align-items-center gap-4">
              <div className="w-12 h-12 bg-secondary-20 rounded-full d-flex align-items-center justify-content-center">
                <span className="material-symbols-outlined text-secondary-fixed">menu_book</span>
              </div>
              <div>
                <p className="text-on-primary font-bold mb-0">450+</p>
                <p className="text-primary-fixed-dim text-label-sm mb-0">Expert Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Abstract Decoration */}
      <div className="position-absolute bottom-n24 left-n24 w-96 h-96 bg-secondary-10 blur-120 rounded-circle"></div>
      <div className="position-absolute top-n24 right-n24 w-96 h-96 bg-primary-20 blur-120 rounded-circle"></div>
    </div>
  );
}

export default AuthVisualPanel;
