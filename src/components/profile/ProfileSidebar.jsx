import { useState } from "react";

const TABS = [
  { id: "personal",      label: "Personal Info",    icon: "person"        },
  { id: "security",      label: "Security",          icon: "shield"        },
  { id: "notifications", label: "Notifications",     icon: "notifications" },
  { id: "payment",       label: "Payment Methods",   icon: "payments"      },
];

function ProfileSidebar() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <aside className="bg-surface-container-low sticky-aside d-none d-md-flex flex-column p-stack-md gap-2">
      {/* Header */}
      <div className="px-3 py-4 mb-4">
        <h2 className="font-headline-md text-headline-md text-primary font-bold">
          Settings
        </h2>
        <p className="font-label-md text-on-surface-variant">Manage your account</p>
      </div>

      {/* Navigation tabs */}
      <nav className="sidebar-nav">
        {TABS.map((tab) => (
          <div
            key={tab.id}
            className={
              activeTab === tab.id
                ? "bg-secondary-container text-on-secondary-container font-bold rounded-lg cursor-pointer d-flex align-items-center p-3 gap-3"
                : "text-on-surface-variant hover-bg-surface-container-high transition-all duration-200 rounded-lg cursor-pointer d-flex align-items-center p-3 gap-3"
            }
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span className="font-label-md text-label-md">{tab.label}</span>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-3">
        <button className="w-100 d-flex align-items-center gap-3 p-3 text-error font-bold hover-bg-error-container-20 rounded-lg transition-colors cursor-pointer">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
