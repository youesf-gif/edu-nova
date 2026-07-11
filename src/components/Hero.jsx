import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Hero() {
  const [isExplorePressed, setIsExplorePressed] = useState(false);
  const [isStartPressed, setIsStartPressed] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <section className="hero-section">
      <div className="container-max">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6 d-flex flex-column gap-4">
            <h1 className="hero-title">
              Your Digital Path to <span className="highlight">Interactive Learning</span>
            </h1>
            <p className="hero-desc">
              Join thousands of students mastering new skills with expert-led courses designed for the
              modern workforce. Learn at your own pace with a structured curriculum.
            </p>
            <div className="hero-buttons">
              <button 
                className={`btn-explore ${isExplorePressed ? "scale-95" : ""}`}
                onMouseDown={() => setIsExplorePressed(true)}
                onMouseUp={() => setIsExplorePressed(false)}
                onMouseLeave={() => setIsExplorePressed(false)}
                onClick={() => navigate("/courses")}
              >
                Explore Courses
              </button>
              <button 
                className={`btn-start ${isStartPressed ? "scale-95" : ""}`}
                onMouseDown={() => setIsStartPressed(true)}
                onMouseUp={() => setIsStartPressed(false)}
                onMouseLeave={() => setIsStartPressed(false)}
                onClick={() => navigate(currentUser ? "/dashboard" : "/register")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 hero-image-wrapper group">
            <div className="hero-image-backdrop"></div>
            <div className="hero-image-frame">
              <img 
                className="hero-img"
                data-alt="A high-quality professional photograph of a diverse group of college students in a bright, modern learning environment. One student is focused on a laptop showing interactive course diagrams, while collaboration around a wooden table occurs."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpREZqwLTB2kKMsQd7JZ4gwfxuVEGPhgH6lzvEXYhpXekznPQ78mbJuub-F4xfFfKQsbZHUq9DpZQKC34tmGIXdhs0VQhurR9NOzduCoXyb0bKDqTIu-paxVKUb0HekjprvcvyUXZ89eocGYh_Vs1pEP-GQKv4pyrNb0vvJ6i-dtO7JM34QTq0TV4KVcB-bGG2PZABpEXv9GwneNrKxGBNv3geDn7gnD-jgh7qB0dXZLZxaKIiC2XBnINzD_cI9jow75H6HSINFqc" 
                alt="A high-quality professional photograph of a diverse group of college students in a bright, modern learning environment."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
