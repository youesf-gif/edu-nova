function StatsBanner() {
    return (
        <section className="stats-section">
            <div className="container-max">
                <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
                    <div className="col d-flex flex-column">
                        <span className="stats-number">50k+</span>
                        <span className="stats-label">Students Enrolled</span>
                    </div>
                    <div className="col d-flex flex-column">
                        <span className="stats-number">120+</span>
                        <span className="stats-label">Expert Courses</span>
                    </div>
                    <div className="col d-flex flex-column">
                        <span className="stats-number">200+</span>
                        <span className="stats-label">Global Instructors</span>
                    </div>
                    <div className="col d-flex flex-column">
                        <span className="stats-number">95%</span>
                        <span className="stats-label">Success Rate</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsBanner;
