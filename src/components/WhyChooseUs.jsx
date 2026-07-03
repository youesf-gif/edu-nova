function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container-max">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose EduNova?</h2>
          <div className="title-line"></div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="why-card group">
              <div className="why-icon-container">
                <span className="material-symbols-outlined">route</span>
              </div>
              <h3 className="why-card-title">Structured Paths</h3>
              <p className="why-card-text">
                Step-by-step learning journeys tailored for your professional
                growth from beginner to advanced levels.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="why-card group">
              <div className="why-icon-container">
                <span className="material-symbols-outlined">play_circle</span>
              </div>
              <h3 className="why-card-title">Interactive Video</h3>
              <p className="why-card-text">
                High-definition lessons with integrated quizzes and downloadable
                resources to reinforce knowledge.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="why-card group">
              <div className="why-icon-container">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="why-card-title">Track Progress</h3>
              <p className="why-card-text">
                Comprehensive dashboard to monitor your skill evolution, completed
                modules, and upcoming deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
