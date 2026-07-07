import React from "react";

function CategorySidebar({
    selectedCategory,
    setSelectedCategory,
    selectedDifficulties,
    handleDifficultyToggle,
    categories,
    className = "d-none d-lg-flex flex-column courses-sidebar"
}) {
    return (
        <aside className={className}>
            <div className="mb-4">
                <h2 className="font-headline-md text-headline-md text-primary mb-1">
                    Categories
                </h2>
                <p className="font-body-md text-label-md text-on-surface-variant m-0">
                    Filter by interest
                </p>
            </div>

            <nav className="d-flex flex-column gap-2 mb-4">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        type="button"
                        className={`category-filter-btn ${selectedCategory === cat.name ? "active" : ""}`}
                        onClick={() => {
                            setSelectedCategory(cat.name);
                        }}
                    >
                        <span className="material-symbols-outlined">
                            {cat.icon}
                        </span>
                        <span>{cat.name}</span>
                    </button>
                ))}
            </nav>

            <div className="border-top border-outline-variant pt-4">
                <h3 className="font-label-md text-label-md text-primary font-bold mb-3">
                    Difficulty
                </h3>
                <div className="d-flex flex-column gap-2 difficulty-filter-group">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                        <label
                          key={level}
                          className="d-flex align-items-center gap-2 text-label-md cursor-pointer group"
                        >
                            <input
                                className="form-check-input rounded border-outline-variant"
                                type="checkbox"
                                checked={selectedDifficulties.includes(level)}
                                onChange={() => handleDifficultyToggle(level)}
                            />
                            <span className="group-hover:text-primary transition-colors">
                                {level}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default CategorySidebar;
