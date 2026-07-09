function ProfileTopNav() {
  return (
    <nav className="profile-topnav">
      <div className="d-flex justify-content-between align-items-center w-100 px-gutter max-w-container-max mx-auto h-100">
        {/* Left: logo + nav links */}
        <div className="d-flex align-items-center gap-8">
          <span className="text-headline-md font-headline-md font-bold text-secondary">
            EduNova
          </span>
          <div className="d-none d-lg-flex gap-6">
            <a
              className="font-body-md text-body-md text-on-surface-variant hover-text-secondary transition-colors cursor-pointer"
              href="#"
            >
              Dashboard
            </a>
          </div>
        </div>

        {/* Right: action buttons + avatar */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-3">
            <button className="p-2 text-on-surface-variant hover-bg-surface-container-low rounded-full transition-all cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover-bg-surface-container-low rounded-full transition-all cursor-pointer">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-secondary overflow-hidden cursor-pointer active-opacity-80">
              <img
                className="w-100 h-100 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1dJJarb86kiflQPhz6qRCo-8r7YGy5JYEbdFmCFTQtWewLlQZss_e2OqsyhxbVrkWXnnd6YhxPqVuvpBekaIkZi93p4ZLvi8oC5TgQ9RTz1Qd2DSOCGq3WpsgxSGlU3pwt_5sW79sfC593o3KOzSAn4yKBkr8PjGJ9q9HkIpJFf6AyFUsV4L8C7iJIqKQxc9EzrexlikwQlKogrw83gYEy-c-a1m_aoGqZU8K_WEUDKSD5RUmKgx9L7qRAae8rbYT8JuPseTq9wE"
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProfileTopNav;
