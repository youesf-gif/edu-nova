import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [pressedIndex, setPressedIndex] = useState(null);

  const faqItems = [
    {
      id: "faq1",
      question: "How do I enroll in a course?",
      answer: "Simply browse our catalog, select the course that interests you, and click 'Enroll Now'. You'll be guided through a secure checkout process."
    },
    {
      id: "faq2",
      question: "Are certificates provided?",
      answer: "Yes! Upon successful completion of all course modules and assessments, you will receive a verified digital certificate that you can share on LinkedIn or with employers."
    },
    {
      id: "faq3",
      question: "Can I access courses on mobile?",
      answer: "Absolutely. Our platform is fully responsive and we also offer mobile apps for iOS and Android, allowing you to learn offline and on the go."
    },
    {
      id: "faq4",
      question: "Is there a refund policy?",
      answer: "We offer a 30-day money-back guarantee for all individual course purchases if you're not satisfied with the content quality."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container px-margin-mobile">
        <div className="section-header text-center">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about starting your journey.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            const isPressed = pressedIndex === index;

            return (
              <div className="faq-item" key={item.id}>
                <button 
                  className={`faq-toggle ${isPressed ? "scale-95" : ""}`}
                  onMouseDown={() => setPressedIndex(index)}
                  onMouseUp={() => setPressedIndex(null)}
                  onMouseLeave={() => setPressedIndex(null)}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className={`material-symbols-outlined arrow-icon ${isActive ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                <div className={`faq-content ${isActive ? "" : "d-none"}`} id={item.id}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
