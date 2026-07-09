const FOOTER_LINKS = [
  { label: "Privacy Policy"  },
  { label: "Terms of Service" },
  { label: "Accessibility"   },
  { label: "Contact Support" },
];

function ProfileFooter() {
  return (
    <footer className="bg-on-surface w-100 py-stack-lg px-gutter d-flex flex-column flex-md-row justify-content-between align-items-center gap-stack-md text-surface-dim border-t border-on-primary-fixed-variant profile-footer">
      {/* Brand + copyright */}
      <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
        <span className="font-headline-lg text-headline-lg text-surface-bright leading-none">
          EduStream
        </span>
        <p className="font-label-sm text-label-sm opacity-80">
          © 2024 EduStream Learning Systems. All rights reserved.
        </p>
      </div>

      {/* Legal links */}
      <div className="d-flex flex-wrap justify-content-center gap-6">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            className="font-body-md text-body-md text-surface-dim opacity-80 hover-opacity-100 hover-text-secondary-fixed transition-colors cursor-pointer"
            href="#"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Icon buttons */}
      <div className="d-flex gap-4">
        <button className="w-10 h-10 rounded-full bg-surface-container-high-10 d-flex align-items-center justify-content-center hover-bg-secondary-fixed-20 transition-all">
          <span className="material-symbols-outlined text-surface-bright">language</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-surface-container-high-10 d-flex align-items-center justify-content-center hover-bg-secondary-fixed-20 transition-all">
          <span className="material-symbols-outlined text-surface-bright">dark_mode</span>
        </button>
      </div>
    </footer>
  );
}

export default ProfileFooter;
