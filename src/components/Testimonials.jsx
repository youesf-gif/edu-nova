function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: '"EduNova changed my career trajectory. The UI/UX course was so practical that I landed a job at a top tech firm within two months of completion."',
      authorName: "Alex Rivera",
      authorTitle: "Product Designer at FlowState",
      imgAlt: "Confident young woman portrait smiling in smart blazer.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeZaEfb9MTlhfkShD3A5MJ9csj5vgxLx_9jro89edDDlom6iR3yNZ0vUkGXuOfqtJg17DS-Bu0zaV7qc3DVxdanBfDunejNZhwI6mMq-0diYDiKm10SE0Rjk1y05j1TwxG4VrLDdAj0sXYxvcWWJ6GFzWaZRCAP6DKceOee-jsi73r59zfOfQbqdIL6nij_952CSp1kle_LR9uOuTV3P0Nb63WI7xxt8wKe5xX9QY8gT2H7p6wWSyfh2KLXkzXyoB82eIXRE1G3_0"
    },
    {
      id: 2,
      text: '"The structured learning paths make complex subjects like React feel manageable. The instructor support is truly world-class."',
      authorName: "James Thompson",
      authorTitle: "Frontend Developer",
      imgAlt: "Young developer wearing tech hoodie smiling.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC89Px5ONNyETWDzPC3szkdoe68CWpRQRxWWwG4b2NpyGQ5-eqI7qu-wqnIHqqfZDYEmwVWmufpDNBuSw9oG9OC7jpThqDnt3NQihXotAGT3H4sHbv4mfnTYmRrO1RdZyIYFlvfbZgjB5AT-OdAiWd95_y6MsGdlBiePOV1Qd60wKwh_SYg8e5MWJCzhCeuS6vdewyqCxr57sGA5dg12oSdIDQNNQvUAYI6LByKv5_VAvM_Iao5Dw8YMCxVS8hOKbi2Jpz5M-j3l1k"
    },
    {
      id: 3,
      text: '"I finally found a platform that balances deep theory with real-world application. The data science modules are exceptionally comprehensive."',
      authorName: "Lila Chen",
      authorTitle: "Data Analyst",
      imgAlt: "Professional office woman bright intelligence portrait.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1ApJEUzJfPnuLWjlznPUa4ic7DAwoXtt8hHEpOxvRdPCIZlxDk1ZhtnUw9IWLqQyO6v7KE-Hwe5DQoKiu20gvy4HcVhqdKW9BuX10qaYLpu36NeTABkg5JR9DnDi-h3o26EceKBwFI8O2mSiu8H6X8idtil0oLhyjXcGi77tOfqNCBQf81SVUQ18We4jp6uTg2LNvHspwTz5PqCtifPbJVl0kWP_6D75pMJnD11pF72uDefUVVx5UHRT4BFeqAxEgr-VtS8OQbU"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container-max">
        <div className="section-header text-center">
          <h2 className="testimonials-title">What Our Students Say</h2>
          <p className="testimonials-subtitle">Real success stories from our global learning community.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map(t => (
            <div className="col" key={t.id}>
              <div className="testimonial-card">
                <div>
                  <div className="stars mb-3">
                    <span className="material-symbols-outlined star-icon filled">star</span>
                    <span className="material-symbols-outlined star-icon filled">star</span>
                    <span className="material-symbols-outlined star-icon filled">star</span>
                    <span className="material-symbols-outlined star-icon filled">star</span>
                    <span className="material-symbols-outlined star-icon filled">star</span>
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                </div>
                <div className="testimonial-author">
                  <img 
                    className="author-img" 
                    data-alt={t.imgAlt} 
                    src={t.imgSrc} 
                    alt={t.imgAlt}
                  />
                  <div>
                    <h5 className="author-name">{t.authorName}</h5>
                    <p className="author-title">{t.authorTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
