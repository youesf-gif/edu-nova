import { useAuth } from "../../context/AuthContext";

function ProfilePhotoCard() {
  const { currentUser } = useAuth();

  return (
    <div className="bento-card p-6 d-flex flex-column align-items-center text-center justify-content-center space-y-4 h-100">
      <div className="relative">
        <div className="profile-photo-wrapper overflow-hidden border-4 border-surface-container-highest shadow-md">
          <img
            className="w-100 h-100 object-cover"
            src={currentUser?.avatar}
            alt="Profile headshot"
          />
        </div>
        <button className="absolute bottom-1 right-1 bg-secondary text-on-secondary p-2 rounded-full shadow-lg hover-scale-110 transition-transform border-0">
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
