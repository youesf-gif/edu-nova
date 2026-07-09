function ProfilePhotoCard() {
  return (
    <div className="bento-card p-6 d-flex flex-column align-items-center text-center justify-content-center space-y-4 h-100">
      <div className="relative">
        <div className="profile-photo-wrapper overflow-hidden border-4 border-surface-container-highest shadow-md">
          <img
            className="w-100 h-100 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF9Wnja8qzPiZNvhVPkqr7J3x9Jmf7rwltzye4_9nhptU_vDs--VxK5MWlANK-poJru47CjHCE_gZRCVil9LIPW5mT2D0W0WTh39feFV0RaJBQtdSuFow-O_a27I3JU7ojIEio2zzfYXRoebxxFsO5f8FdgCT62GxYBpDBrL2KoIfrUlK5ohOCzf-BO-6K-PiccvC53-WDFbs-jTqM2PpdzT21L0zBkMmIa7Se0bSPpTK0nOskhGSdMNZxOnybNfW9nS5Lm1GHuf4"
            alt="Profile headshot"
          />
        </div>
        <button className="absolute bottom-1 right-1 bg-secondary text-on-secondary p-2 rounded-full shadow-lg hover-scale-110 transition-transform">
          <span className="material-symbols-outlined text-sm">edit</span>
        </button>
      </div>

      <div>
        <p className="font-label-md text-on-surface font-bold">Profile Photo</p>
        <p className="text-10px text-on-surface-variant mt-1">
          JPG, GIF or PNG. Max size of 800K
        </p>
      </div>
    </div>
  );
}

export default ProfilePhotoCard;
